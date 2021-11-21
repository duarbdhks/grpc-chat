# gRPC Chat

## 개요

- grpc 이해도를 높이기 위해 간단히 grpc 와 nodejs 를 사용하여 chat 서비스 구현
- typescript 사용
- proto buffer

## APP Layout

- [package.json](./package.json) - Dependencies and node build scripts
- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc Server
- [client.ts](./client.ts) - The grpc Client

## 1. Type 생성

proto buffer 를 compile 하여 typescript type 을 생성한다.

````bash
npm install
npm run build:proto
````

## 2. App 실행

demo URL: [http://localhost:8081](http://localhost:8081)

````bash
npm install

# client ts build to dist directory
npm run build

# docker run envoyproxy (이미 docker proxy 돌린 전적이 있을 시, start:proxy 건너띄고 해당 컨테이너 재실행)
npm run start:proxy

# node server
npm run start:server

# python3 -m http.server 8081
npm run start:http
````
