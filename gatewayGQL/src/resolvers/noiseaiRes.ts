import { HelloRequest, HelloReply } from '../tools/trafficAI_pb';
import { GreeterClient } from '../tools/trafficAI_grpc_pb';
import * as grpc from "@grpc/grpc-js"

const client = new GreeterClient('http://localhost:50051', grpc.credentials.createInsecure())

export const resolverNoiseAI = {
  Query: {
    hello: async (parent:any, args:any) => {
      const request = new HelloRequest();
      request.setName(args.name);
      return new Promise((resolve, reject) => {
        client.sayHello(request, {}, (err, response: HelloReply) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.getMessage());
          }
        });
      });
    },
  },
};

export default resolverNoiseAI