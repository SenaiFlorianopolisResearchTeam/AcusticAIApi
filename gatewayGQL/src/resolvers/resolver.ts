import { HelloRequest, ImageRequest, NoiseRequest, VideoRequest } from '../grpc/gateway_pb';
import { NoiseAIServiceClient, TrafficServiceClient } from './../grpc/gateway_grpc_pb';
import * as grpc from "@grpc/grpc-js"

const resolvers = {
    Query: {
        predict: async (_: any, args: any) => {
            const client = new NoiseAIServiceClient('localhost:50051', grpc.credentials.createInsecure());

            const request = new NoiseRequest();
            request.setNoise(args.noise);

            const response = await new Promise((resolve, reject) => {
                client.predict(request, (error: any, response: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            return response;
        },
        sayHello: async (_: any, args: any) => {
            const client = new TrafficServiceClient('localhost:50052', grpc.credentials.createInsecure());

            const request = new HelloRequest();
            request.setName(args.name);

            const response = await new Promise((resolve, reject) => {
                client.sayHello(request, (error: any, response: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            return response;
        },
        sendImage: async (_: any, args: any) => {
            const client = new TrafficServiceClient('localhost:50052', grpc.credentials.createInsecure());

            const request = new ImageRequest();
            request.setImage(args.image);

            const response = await new Promise((resolve, reject) => {
                client.sendImage(request, (error: any, response: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            return response;
        },
        sendVideo: async (_: any, args: any) => {
            const client = new TrafficServiceClient('localhost:50052', grpc.credentials.createInsecure());

            const request = new VideoRequest();
            request.setVideo(args.video);

            const response = await new Promise((resolve, reject) => {
                client.sendVideo(request, (error: any, response: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            return response;
        }
    }
};

export default resolvers;