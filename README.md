# gRPC Chat

## 개요

- grpc 이해도를 높이기 위해 간단히 grpc 와 nodejs 를 사용하여 chat 서비스 구현
- typescript 사용

## APP Layout

- [package.json](./package.json) - Dependencies and node build scripts
- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc Server
- [client.ts](./client.ts) - The grpc Client

## 1. Type 생성

````bash
npm install
npm run build:proto
````

## 2. App 실행

````bash
npm install
npm run build
npm run start:proxy
npm run start:server
````
