// package: trafficAI
// file: trafficAI.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as trafficAI_pb from "./trafficAI_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_IsayHello;
    sendImage: IGreeterService_IsendImage;
    sendVideo: IGreeterService_IsendVideo;
}

interface IGreeterService_IsayHello extends grpc.MethodDefinition<trafficAI_pb.HelloRequest, trafficAI_pb.HelloReply> {
    path: "/trafficAI.Greeter/sayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trafficAI_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<trafficAI_pb.HelloRequest>;
    responseSerialize: grpc.serialize<trafficAI_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<trafficAI_pb.HelloReply>;
}
interface IGreeterService_IsendImage extends grpc.MethodDefinition<trafficAI_pb.ImageRequest, trafficAI_pb.ImageReply> {
    path: "/trafficAI.Greeter/sendImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trafficAI_pb.ImageRequest>;
    requestDeserialize: grpc.deserialize<trafficAI_pb.ImageRequest>;
    responseSerialize: grpc.serialize<trafficAI_pb.ImageReply>;
    responseDeserialize: grpc.deserialize<trafficAI_pb.ImageReply>;
}
interface IGreeterService_IsendVideo extends grpc.MethodDefinition<trafficAI_pb.VideoRequest, trafficAI_pb.VideoReply> {
    path: "/trafficAI.Greeter/sendVideo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trafficAI_pb.VideoRequest>;
    requestDeserialize: grpc.deserialize<trafficAI_pb.VideoRequest>;
    responseSerialize: grpc.serialize<trafficAI_pb.VideoReply>;
    responseDeserialize: grpc.deserialize<trafficAI_pb.VideoReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<trafficAI_pb.HelloRequest, trafficAI_pb.HelloReply>;
    sendImage: grpc.handleUnaryCall<trafficAI_pb.ImageRequest, trafficAI_pb.ImageReply>;
    sendVideo: grpc.handleUnaryCall<trafficAI_pb.VideoRequest, trafficAI_pb.VideoReply>;
}

export interface IGreeterClient {
    sayHello(request: trafficAI_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: trafficAI_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: trafficAI_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sendImage(request: trafficAI_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendImage(request: trafficAI_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendImage(request: trafficAI_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: trafficAI_pb.VideoRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: trafficAI_pb.VideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: trafficAI_pb.VideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: trafficAI_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: trafficAI_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: trafficAI_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: trafficAI_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: trafficAI_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: trafficAI_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: trafficAI_pb.VideoRequest, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: trafficAI_pb.VideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: trafficAI_pb.VideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
}
