// package: noiseAI
// file: noiseAI.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as noiseAI_pb from "./noiseAI_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    predict: IGreeterService_IPredict;
}

interface IGreeterService_IPredict extends grpc.MethodDefinition<noiseAI_pb.NoiseRequest, noiseAI_pb.NoiseReply> {
    path: "/noiseAI.Greeter/Predict";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<noiseAI_pb.NoiseRequest>;
    requestDeserialize: grpc.deserialize<noiseAI_pb.NoiseRequest>;
    responseSerialize: grpc.serialize<noiseAI_pb.NoiseReply>;
    responseDeserialize: grpc.deserialize<noiseAI_pb.NoiseReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    predict: grpc.handleUnaryCall<noiseAI_pb.NoiseRequest, noiseAI_pb.NoiseReply>;
}

export interface IGreeterClient {
    predict(request: noiseAI_pb.NoiseRequest, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
    predict(request: noiseAI_pb.NoiseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
    predict(request: noiseAI_pb.NoiseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public predict(request: noiseAI_pb.NoiseRequest, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
    public predict(request: noiseAI_pb.NoiseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
    public predict(request: noiseAI_pb.NoiseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: noiseAI_pb.NoiseReply) => void): grpc.ClientUnaryCall;
}
