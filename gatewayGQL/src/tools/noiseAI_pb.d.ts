// package: noiseAI
// file: noiseAI.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NoiseRequest extends jspb.Message { 
    getNoise(): string;
    setNoise(value: string): NoiseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoiseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NoiseRequest): NoiseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoiseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoiseRequest;
    static deserializeBinaryFromReader(message: NoiseRequest, reader: jspb.BinaryReader): NoiseRequest;
}

export namespace NoiseRequest {
    export type AsObject = {
        noise: string,
    }
}

export class NoiseReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): NoiseReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoiseReply.AsObject;
    static toObject(includeInstance: boolean, msg: NoiseReply): NoiseReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoiseReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoiseReply;
    static deserializeBinaryFromReader(message: NoiseReply, reader: jspb.BinaryReader): NoiseReply;
}

export namespace NoiseReply {
    export type AsObject = {
        message: string,
    }
}
