import * as grpc from '@grpc/grpc-js'
import { ServerMessage, ClientMessage } from './proto/chat_pb'
import { ChatService, IChatServer } from './proto/chat_grpc_pb'

const users: grpc.ServerWritableStream<ClientMessage, ServerMessage>[] = []
const messages: ClientMessage[] = []

function notifyChat(message: ServerMessage) {
  messages.push(message)
  users.forEach((user) => user.write(message))
}

const chatServer: IChatServer = {
  join(call: grpc.ServerWritableStream<ClientMessage, ServerMessage>): void {
    users.push(call)
    const serverMessage = new ServerMessage()
    serverMessage.setUser('Server')
    serverMessage.setText(`${call.request?.getUser()} joined`)
    notifyChat(serverMessage)
  },
  send(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>,
  ): void {
    if (call.request) {
      const clientMessage = call.request
      const serverMessage = new ServerMessage()
      serverMessage.setUser(clientMessage.getUser())
      serverMessage.setText(clientMessage.getText())
      notifyChat(serverMessage)

      callback(null, serverMessage)
    }
  },
}

export function getServer(): grpc.Server {
  const server = new grpc.Server()
  server.addService(ChatService, chatServer)
  return server
}

const main = () => {
  const server = getServer()
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.log(`Server Error: ${err.message}`)
    } else {
      console.log(`Server bound on port: ${port}`)
      server.start()
    }
  })
}

main()
