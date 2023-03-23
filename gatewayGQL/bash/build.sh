#!/usr/bin/env bash

mkdir -p ./src/grpc/proto

# grpc-js
./node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/grpc/proto \
--grpc_out=grpc_js:./src/grpc/proto \
-I ./proto \
proto/*.proto

# typescript generate