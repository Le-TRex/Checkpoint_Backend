// Type ORM
import "reflect-metadata";

// GraphQl
import { buildSchema } from "type-graphql";

// ApolloServer
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Configuration DB
import { dataSource } from "./config/db";

// Resolvers
import { PaysResolver } from "./resolvers/PaysResolver";

// Seed
const pays = [
  {
    code: "FR",
    nom: "France",
    emoji: "🇫🇷",
  },
  {
    code: "DE",
    nom: "Allemagne",
    emoji: "🇩🇪",
  },
  {
    code: "IR",
    nom: "Irlande",
    emoji: "🇮🇪",
  },
  {
    code: "DK",
    nom: "Danemark",
    emoji: "🇩🇰",
  },
]

// Config/démarrage du serveur Apollo
const port = 4000;

async function startServer() {
  await dataSource.initialize();
  const schema = await buildSchema({resolvers: [PaysResolver]});
  const apolloServer = new ApolloServer({schema});
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });
  console.log(`🚀 Server ready at: ${url}`);
}
startServer();
