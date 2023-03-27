#!/usr/bin/env bash

mkdir -p ./src/grpc

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs:./src/tools \
    --grpc_out=grpc_js:./src/tools \
    --plugin=protoc-gen-grpc-ts=./node_modules/.bin/protoc-gen-grpc-ts \
    --ts_out=:./src/tools \
    -I ./src/proto \
    src/proto/*.proto

mkdir -p dist/tools/
cp -r ./src/grpc/gateway_grpc_pb.js dist/tools/
cp -r ./src/grpc/gateway_pb.js dist/tools/

tsc