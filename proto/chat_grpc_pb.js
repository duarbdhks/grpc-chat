// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_chat_pb = require('../proto/chat_pb.js');

function serialize_chat_package_ClientMessage(arg) {
  if (!(arg instanceof proto_chat_pb.ClientMessage)) {
    throw new Error('Expected argument of type chat_package.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_package_ClientMessage(buffer_arg) {
  return proto_chat_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_package_ServerMessage(arg) {
  if (!(arg instanceof proto_chat_pb.ServerMessage)) {
    throw new Error('Expected argument of type chat_package.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_package_ServerMessage(buffer_arg) {
  return proto_chat_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  join: {
    path: '/chat_package.Chat/join',
    requestStream: false,
    responseStream: true,
    requestType: proto_chat_pb.ClientMessage,
    responseType: proto_chat_pb.ServerMessage,
    requestSerialize: serialize_chat_package_ClientMessage,
    requestDeserialize: deserialize_chat_package_ClientMessage,
    responseSerialize: serialize_chat_package_ServerMessage,
    responseDeserialize: deserialize_chat_package_ServerMessage,
  },
  send: {
    path: '/chat_package.Chat/send',
    requestStream: false,
    responseStream: false,
    requestType: proto_chat_pb.ClientMessage,
    responseType: proto_chat_pb.ServerMessage,
    requestSerialize: serialize_chat_package_ClientMessage,
    requestDeserialize: deserialize_chat_package_ClientMessage,
    responseSerialize: serialize_chat_package_ServerMessage,
    responseDeserialize: deserialize_chat_package_ServerMessage,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
