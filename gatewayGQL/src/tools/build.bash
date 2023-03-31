#!/usr/bin/env bash

mkdir -p dist/tools/

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs:./dist/tools \
    --grpc_out=grpc_js:./dist/tools \
    --plugin=protoc-gen-grpc-ts=./node_modules/.bin/protoc-gen-grpc-ts \
    --ts_out=:./src/tools \
    -I ./src/proto \
    src/proto/*.proto

tsc