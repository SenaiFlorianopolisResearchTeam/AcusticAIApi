import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from "./resolvers/resolvers";
import typeDefs from "./types/typesDefs";

export const server = new ApolloServer({
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