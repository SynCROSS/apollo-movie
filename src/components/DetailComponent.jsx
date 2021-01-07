import React from 'react';
import styled from 'styled-components';
import { onImageError } from './HomeComponent';

const DetailComponentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(51, 51, 51, 0.3);
  background-blend-mode: multiply;
  padding: 10px 20px;

  & > .movie_info {
    font-size: 2rem;
    width: 50%;
    margin: 20px;
    word-wrap: break-word;
  }

  & > .movie_info > .movie_header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & > .movie_info > .movie_header > .cover_image {
    border-radius: 10px;
    border: 5px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }

  & > .movie_info > .movie_header > .title {
    margin: 20px auto;
  }

  & > .movie_info > .movie_header > .under_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
      <div className="movie_info">
        <header className="movie_header">
          <h2 className="title">{title}</h2>
          <img
            src={large_cover_image}
            alt={title}
            onError={onImageError}
            className="cover_image"
          />
          <div className="under_title">
            <strong className="rating">{rating}/10</strong>
            <div className="date">{date_uploaded}</div>
          </div>
          <hr style={{ margin: '10px 0', width: '100%' }} />
        </header>

        <p className="summary">{description_full}</p>
      </div>
    </DetailComponentBlock>
  );
};

export default DetailComponent;
