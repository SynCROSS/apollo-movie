import React from 'react';
import { gql, useQuery } from '@apollo/client';
import HomeComponent from '../components/HomeComponent';

// * @client means it comes from frontend
const GET_MOVIES = gql`
  {
    movies {
      id
      title
      description_full
      large_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(
    'Home:\n\tloading status: ' +
      loading +
      '\n\terror: ' +
      error +
      '\n\tdata: ' +
      data,
  );
  return (
    <section className="movies_wrapper">
      {data?.movies?.map(movie => (
        <HomeComponent
          key={movie.id}
          id={movie.id}
          title={movie.title}
          summary={movie.description_full}
          large_cover_image={movie.large_cover_image}
          isLiked={movie.isLiked}
        />
      ))}
    </section>
  );
};

export default Home;
