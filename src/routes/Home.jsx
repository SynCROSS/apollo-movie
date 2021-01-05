import React from 'react';
import { gql, useQuery } from '@apollo/client';
import HomeComponent from '../components/HomeComponent';

// * If the Query does not have a Variable,
// * the 'query' can be omitted.
const GET_MOVIES = gql`
  {
    movies {
      id
      title
      summary
      large_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(
    'loading status: ' + loading + '\nerror: ' + error + '\ndata: ' + data,
  );
  return (
    <section className="movie_wrapper">
      {!loading &&
        data &&
        data.movies.map(movie => (
          <HomeComponent
            key={movie.id}
            id={movie.id}
            title={movie.title}
            summary={movie.summary}
            large_cover_image={movie.large_cover_image}
          />
        ))}
    </section>
  );
};

export default Home;
