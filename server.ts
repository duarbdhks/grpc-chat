const http = require('http')
const express = require('express')

const app = express()
const port = 8081

let server

function listenPort() {
  server = http.createServer(app).listen(port, '0.0.0.0', () => {
    console.log(`[${new Date()}] Express server listening on port ${port} ${app.get('env')} mode!`)
  })
}


const main = () => {
  try {
    listenPort()
  } catch (e) {
    console.log('# Error on initializing', e)
  }
}

main()
