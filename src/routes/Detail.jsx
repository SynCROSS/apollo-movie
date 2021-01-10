import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import DetailComponent from '../components/DetailComponent';

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
        large_cover_image
      }
    }
  `;

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(loading, data);
  return (
    <div className="movie_wrapper">
      {/* {!loading && data.movie && ( */}
      <DetailComponent
        title={data?.movie?.title}
        rating={data?.movie?.rating}
        genres={data?.movie?.genres}
        description_full={data?.movie?.description_full ?? 'No Summary ......'}
        background_image_original={data?.movie?.background_image_original}
        large_cover_image={data?.movie?.large_cover_image}
        date_uploaded={data?.movie?.date_uploaded}
      />
      {/* )} */}
    </div>
  );
};

export default Detail;
