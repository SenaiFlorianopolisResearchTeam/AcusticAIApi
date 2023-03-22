import { ApolloServer } from 'apollo-server-express';
import * as grpc from 'grpc';
import { IGatewayServer, GatewayService } from './grpc/proto/gateway_grpc_pb';
import { resolvers, typeDefs } from './graphql/api.graphql';