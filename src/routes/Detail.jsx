import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import DetailComponent from '../components/DetailComponent';
import HomeComponent from '../components/HomeComponent';

const Detail = () => {
  const { id } = useParams();
  const GET_MOVIE = gql`
    query getMovie($id: Int!) {
      movie(movie_id: $id) {
        title
        rating
        genres
        description_full
        background_image_original
        large_cover_image
        date_uploaded
      }
      suggestions(movie_id: $id) {
        id
        title
        description_full
        medium_cover_image
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(loading, data, error);
  return (
    <div className="movie_wrapper flex-center">
      <DetailComponent
        title={data?.movie?.title}
        rating={data?.movie?.rating}
        genres={data?.movie?.genres}
        description_full={data?.movie?.description_full}
        background_image_original={data?.movie?.background_image_original}
        large_cover_image={data?.movie?.large_cover_image}
        date_uploaded={data?.movie?.date_uploaded}
      />
      {data && data.suggestions && (
        <h2 style={{ color: '#000', fontSize: '2rem', margin: '20px auto' }}>
          Recommend For You
        </h2>
      )}
      <section className="movies_wrapper">
        {data?.suggestions?.map(suggestion => (
          <HomeComponent
            key={suggestion.id}
            id={suggestion.id}
            title={suggestion.title}
            summary={suggestion.description_full}
            large_cover_image={null}
            medium_cover_image={suggestion.medium_cover_image}
          />
        ))}
      </section>
    </div>
  );
};

export default Detail;
