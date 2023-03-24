import { NoiseAIServiceClient, TrafficServiceClient } from './grpc/gateway_grpc_pb';
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
    serviceList: [
      { name: 'noiseAI', url: 'localhost:50052' },
      { name: 'traffic', url: 'localhost:50051' },
    ],
});

const server = new ApolloServer({
    gateway,
    subscriptions: false,
    context: ({ req:any }) => {
      // Adiciona o objeto gRPC aos cabeçalhos do contexto
      const noiseAIClient = new NoiseAIServiceClient('localhost:50051', grpc.credentials.createInsecure());
      const trafficClient = new TrafficServiceClient('localhost:50052', grpc.credentials.createInsecure());
  
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