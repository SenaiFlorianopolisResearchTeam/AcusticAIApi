import { NoiseAIServiceClient, TrafficServiceClient } from './grpc/gateway_grpc_pb';
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import resolvers from './resolvers/resolver';
import * as grpc from "@grpc/grpc-js"

const gateway = new ApolloGateway({
    serviceList: [
      { name: 'noiseAI', url: 'localhost:50052' },
      { name: 'traffic', url: 'localhost:50051' },
    ],
});

const server = new ApolloServer({
    gateway,
    context: ({ req }) => {
      const noiseAIClient = new NoiseAIServiceClient('localhost:50052', grpc.credentials.createInsecure());
      const trafficClient = new TrafficServiceClient('localhost:50051', grpc.credentials.createInsecure());
  
      return {
        headers: {
          noiseAIClient,
          trafficClient,
        },
      };
    },
    resolvers,
});

server.listen(4000,()=> {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})