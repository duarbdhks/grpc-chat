// GENERATED CODE -- DO NOT EDIT!

// package: chat_package
// file: proto/chat.proto

import * as proto_chat_pb from "../proto/chat_pb";
import * as grpc from "@grpc/grpc-js";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  join: grpc.MethodDefinition<proto_chat_pb.ClientMessage, proto_chat_pb.ServerMessage>;
  send: grpc.MethodDefinition<proto_chat_pb.ClientMessage, proto_chat_pb.ServerMessage>;
}

export const ChatService: IChatService;

export interface IChatServer extends grpc.UntypedServiceImplementation {
  join: grpc.handleServerStreamingCall<proto_chat_pb.ClientMessage, proto_chat_pb.ServerMessage>;
  send: grpc.handleUnaryCall<proto_chat_pb.ClientMessage, proto_chat_pb.ServerMessage>;
}

export class ChatClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  join(argument: proto_chat_pb.ClientMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_chat_pb.ServerMessage>;
  join(argument: proto_chat_pb.ClientMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_chat_pb.ServerMessage>;
  send(argument: proto_chat_pb.ClientMessage, callback: grpc.requestCallback<proto_chat_pb.ServerMessage>): grpc.ClientUnaryCall;
  send(argument: proto_chat_pb.ClientMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_chat_pb.ServerMessage>): grpc.ClientUnaryCall;
  send(argument: proto_chat_pb.ClientMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_chat_pb.ServerMessage>): grpc.ClientUnaryCall;
}
