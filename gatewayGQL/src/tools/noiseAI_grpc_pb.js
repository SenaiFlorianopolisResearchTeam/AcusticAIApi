// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var noiseAI_pb = require('./noiseAI_pb.js');

function serialize_noiseAI_NoiseReply(arg) {
  if (!(arg instanceof noiseAI_pb.NoiseReply)) {
    throw new Error('Expected argument of type noiseAI.NoiseReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_noiseAI_NoiseReply(buffer_arg) {
  return noiseAI_pb.NoiseReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_noiseAI_NoiseRequest(arg) {
  if (!(arg instanceof noiseAI_pb.NoiseRequest)) {
    throw new Error('Expected argument of type noiseAI.NoiseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_noiseAI_NoiseRequest(buffer_arg) {
  return noiseAI_pb.NoiseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  predict: {
    path: '/noiseAI.Greeter/Predict',
    requestStream: false,
    responseStream: false,
    requestType: noiseAI_pb.NoiseRequest,
    responseType: noiseAI_pb.NoiseReply,
    requestSerialize: serialize_noiseAI_NoiseRequest,
    requestDeserialize: deserialize_noiseAI_NoiseRequest,
    responseSerialize: serialize_noiseAI_NoiseReply,
    responseDeserialize: deserialize_noiseAI_NoiseReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
