import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

// Name of the localStorage item
const AUTH_TOKEN = process.env.VUE_APP_GRAPHQL_AUTH_TOKEN || '';

// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4000/graphql';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: httpEndpoint,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export const apolloProvider = createApolloProvider({
  // Default client
  defaultClient: apolloClient,
});
