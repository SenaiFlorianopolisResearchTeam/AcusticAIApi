// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var trafficAI_pb = require('./trafficAI_pb.js');

function serialize_trafficAI_HelloReply(arg) {
  if (!(arg instanceof trafficAI_pb.HelloReply)) {
    throw new Error('Expected argument of type trafficAI.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_HelloReply(buffer_arg) {
  return trafficAI_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trafficAI_HelloRequest(arg) {
  if (!(arg instanceof trafficAI_pb.HelloRequest)) {
    throw new Error('Expected argument of type trafficAI.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_HelloRequest(buffer_arg) {
  return trafficAI_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trafficAI_ImageReply(arg) {
  if (!(arg instanceof trafficAI_pb.ImageReply)) {
    throw new Error('Expected argument of type trafficAI.ImageReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_ImageReply(buffer_arg) {
  return trafficAI_pb.ImageReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trafficAI_ImageRequest(arg) {
  if (!(arg instanceof trafficAI_pb.ImageRequest)) {
    throw new Error('Expected argument of type trafficAI.ImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_ImageRequest(buffer_arg) {
  return trafficAI_pb.ImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trafficAI_VideoReply(arg) {
  if (!(arg instanceof trafficAI_pb.VideoReply)) {
    throw new Error('Expected argument of type trafficAI.VideoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_VideoReply(buffer_arg) {
  return trafficAI_pb.VideoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trafficAI_VideoRequest(arg) {
  if (!(arg instanceof trafficAI_pb.VideoRequest)) {
    throw new Error('Expected argument of type trafficAI.VideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trafficAI_VideoRequest(buffer_arg) {
  return trafficAI_pb.VideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/trafficAI.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: trafficAI_pb.HelloRequest,
    responseType: trafficAI_pb.HelloReply,
    requestSerialize: serialize_trafficAI_HelloRequest,
    requestDeserialize: deserialize_trafficAI_HelloRequest,
    responseSerialize: serialize_trafficAI_HelloReply,
    responseDeserialize: deserialize_trafficAI_HelloReply,
  },
  sendImage: {
    path: '/trafficAI.Greeter/SendImage',
    requestStream: false,
    responseStream: false,
    requestType: trafficAI_pb.ImageRequest,
    responseType: trafficAI_pb.ImageReply,
    requestSerialize: serialize_trafficAI_ImageRequest,
    requestDeserialize: deserialize_trafficAI_ImageRequest,
    responseSerialize: serialize_trafficAI_ImageReply,
    responseDeserialize: deserialize_trafficAI_ImageReply,
  },
  sendVideo: {
    path: '/trafficAI.Greeter/SendVideo',
    requestStream: false,
    responseStream: false,
    requestType: trafficAI_pb.VideoRequest,
    responseType: trafficAI_pb.VideoReply,
    requestSerialize: serialize_trafficAI_VideoRequest,
    requestDeserialize: deserialize_trafficAI_VideoRequest,
    responseSerialize: serialize_trafficAI_VideoReply,
    responseDeserialize: deserialize_trafficAI_VideoReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
