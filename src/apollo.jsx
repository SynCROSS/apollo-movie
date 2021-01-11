import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
});

export default client;
