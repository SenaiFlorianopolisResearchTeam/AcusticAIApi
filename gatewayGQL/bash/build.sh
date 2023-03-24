#!/usr/bin/env bash

mkdir -p ./src/grpc

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./src/grpc \
    --grpc_out=grpc_js:./src/grpc \
    --plugin=protoc-gen-grpc-ts=./node_modules/.bin/protoc-gen-grpc-ts \
    --ts_out=:./src/grpc \
    -I ./proto \
    proto/*.proto

mkdir -p dist/grpc/
cp -r ./src/grpc/* dist/grpc/
cp -r ./src/grpc/* dist/grpc/

tsc