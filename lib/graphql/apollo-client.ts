import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

export const query = (query: DocumentNode) => apolloClient.query({ query });
