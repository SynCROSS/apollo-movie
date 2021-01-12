import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleMovieLike: (_, { id, isLiked }, { cache }) => {
        console.log(id, isLiked, cache);
        const myMovie = {
          __typename: 'Movie',
          id,
          isLiked,
        };
        cache.modify({
          id: cache.identify(myMovie),
          fields: {
            isLiked: isLiked => !isLiked,
          },
        });
      },
    },
  },
});

export default client;
