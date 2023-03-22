// package: gateway
// file: proto/trafficAI.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_trafficAI_pb from "../proto/trafficAI_pb";

interface IGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGatewayService_ISayHello;
    sendImage: IGatewayService_ISendImage;
    sendVideo: IGatewayService_ISendVideo;
}

interface IGatewayService_ISayHello extends grpc.MethodDefinition<proto_trafficAI_pb.HelloRequest, proto_trafficAI_pb.HelloReply> {
    path: "/gateway.Gateway/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_trafficAI_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<proto_trafficAI_pb.HelloRequest>;
    responseSerialize: grpc.serialize<proto_trafficAI_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<proto_trafficAI_pb.HelloReply>;
}
interface IGatewayService_ISendImage extends grpc.MethodDefinition<proto_trafficAI_pb.ImageRequest, proto_trafficAI_pb.ImageReply> {
    path: "/gateway.Gateway/SendImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_trafficAI_pb.ImageRequest>;
    requestDeserialize: grpc.deserialize<proto_trafficAI_pb.ImageRequest>;
    responseSerialize: grpc.serialize<proto_trafficAI_pb.ImageReply>;
    responseDeserialize: grpc.deserialize<proto_trafficAI_pb.ImageReply>;
}
interface IGatewayService_ISendVideo extends grpc.MethodDefinition<proto_trafficAI_pb.VideoRequest, proto_trafficAI_pb.VideoReply> {
    path: "/gateway.Gateway/SendVideo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_trafficAI_pb.VideoRequest>;
    requestDeserialize: grpc.deserialize<proto_trafficAI_pb.VideoRequest>;
    responseSerialize: grpc.serialize<proto_trafficAI_pb.VideoReply>;
    responseDeserialize: grpc.deserialize<proto_trafficAI_pb.VideoReply>;
}

export const GatewayService: IGatewayService;

export interface IGatewayServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<proto_trafficAI_pb.HelloRequest, proto_trafficAI_pb.HelloReply>;
    sendImage: grpc.handleUnaryCall<proto_trafficAI_pb.ImageRequest, proto_trafficAI_pb.ImageReply>;
    sendVideo: grpc.handleUnaryCall<proto_trafficAI_pb.VideoRequest, proto_trafficAI_pb.VideoReply>;
}

export interface IGatewayClient {
    sayHello(request: proto_trafficAI_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_trafficAI_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_trafficAI_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sendImage(request: proto_trafficAI_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendImage(request: proto_trafficAI_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendImage(request: proto_trafficAI_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: proto_trafficAI_pb.VideoRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: proto_trafficAI_pb.VideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    sendVideo(request: proto_trafficAI_pb.VideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
}

export class GatewayClient extends grpc.Client implements IGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: proto_trafficAI_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_trafficAI_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_trafficAI_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: proto_trafficAI_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: proto_trafficAI_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendImage(request: proto_trafficAI_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.ImageReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: proto_trafficAI_pb.VideoRequest, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: proto_trafficAI_pb.VideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
    public sendVideo(request: proto_trafficAI_pb.VideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_trafficAI_pb.VideoReply) => void): grpc.ClientUnaryCall;
}
