// package: gateway
// file: proto/gateway.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class ImageRequest extends jspb.Message { 
    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): ImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageRequest): ImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageRequest;
    static deserializeBinaryFromReader(message: ImageRequest, reader: jspb.BinaryReader): ImageRequest;
}

export namespace ImageRequest {
    export type AsObject = {
        image: Uint8Array | string,
    }
}

export class ImageReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ImageReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageReply.AsObject;
    static toObject(includeInstance: boolean, msg: ImageReply): ImageReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageReply;
    static deserializeBinaryFromReader(message: ImageReply, reader: jspb.BinaryReader): ImageReply;
}

export namespace ImageReply {
    export type AsObject = {
        message: string,
    }
}

export class VideoRequest extends jspb.Message { 
    getVideo(): Uint8Array | string;
    getVideo_asU8(): Uint8Array;
    getVideo_asB64(): string;
    setVideo(value: Uint8Array | string): VideoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VideoRequest): VideoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoRequest;
    static deserializeBinaryFromReader(message: VideoRequest, reader: jspb.BinaryReader): VideoRequest;
}

export namespace VideoRequest {
    export type AsObject = {
        video: Uint8Array | string,
    }
}

export class VideoReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): VideoReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoReply.AsObject;
    static toObject(includeInstance: boolean, msg: VideoReply): VideoReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoReply;
    static deserializeBinaryFromReader(message: VideoReply, reader: jspb.BinaryReader): VideoReply;
}

export namespace VideoReply {
    export type AsObject = {
        message: string,
    }
}
