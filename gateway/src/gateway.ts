import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from "./resolvers/resolverGQL";
import typeDefs from "./types/typedefsGQL";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const start = async () => {
    await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
}

start()
  
console.log(`🚀  Server up: Localhost:4000`);