import React from 'react';
import styled from 'styled-components';
import { onImageError } from './HomeComponent';

const DetailComponentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(51, 51, 51, 0.6);
  background-blend-mode: multiply;
  padding: 10px 20px;

  & > .cover_image {
    width: 200px;
    border-radius: 10px;
    border: 5px solid white;
  }
  & > .movie_text {
    font-size: 2rem;
    width: 50%;
    margin: 20px;
    word-wrap: break-word;
  }

  & > .movie_text > .movie_header > .title {
    margin: 50px auto;
  }

  & > .movie_text > .movie_header > .under_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DetailComponent = ({
  title,
  rating,
  genres,
  description_full,
  background_image_original,
  large_cover_image,
  date_uploaded,
}) => {
  return (
    <DetailComponentBlock
      style={{ backgroundImage: `url(${background_image_original})` }}>
      <img
        src={large_cover_image}
        alt={title}
        onError={onImageError}
        className="cover_image"
      />
      <div className="movie_text">
        <header className="movie_header">
          <h2 className="title">{title}</h2>
          <div className="under_title">
            <strong className="rating">{rating}/10</strong>
            <div className="date">{date_uploaded}</div>
          </div>
          <hr />
        </header>
        <p className="summary">{description_full}</p>
      </div>
    </DetailComponentBlock>
  );
};

export default DetailComponent;
