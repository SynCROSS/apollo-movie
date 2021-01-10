import React from 'react';
import styled from 'styled-components';
import { onImageError } from './HomeComponent';

const DetailComponentBlock = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(51, 51, 51, 0.3);
  background-blend-mode: multiply;
  padding: 10px 20px;
  width: 97vw;

  & > .movie_info {
    font-size: 2rem;
    width: 50%;
    margin: 20px;
    word-wrap: break-word;
  }

  & > .movie_info > .movie_header {
    flex-direction: column;
  }

  & > .movie_info > .movie_header > .cover_image {
    border-radius: 10px;
    border: 5px solid white;
    margin: 40px;
  }

  & > .movie_info > .movie_header > .title {
    margin: 20px auto;
  }

  & > .movie_info > .movie_header > .under_title {
    justify-content: space-between;
    width: 100%;
  }

  & > .movie_info > .movie_header > .genres {
    color: aliceblue;
    font-size: 1.5rem;
  }

  & > .movie_info > .movie_header > .genres > .genre {
    list-style: none;
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
      className="flex-center"
      style={{ backgroundImage: `url(${background_image_original})` }}>
      <div className="movie_info">
        <header className="movie_header flex-center">
          <h2 className="title">{title}</h2>
          <ul className="genres flex-center">
            {genres?.map(genre => (
              <li className="genre" key={genre}>
                &nbsp;{genre}&nbsp;
              </li>
            ))}
          </ul>
          <img
            src={large_cover_image}
            alt={title}
            onError={onImageError}
            className="cover_image flex-center"
          />
          <div className="under_title flex ai-center">
            <strong className="rating">{rating}/10</strong>
            <div className="date">{date_uploaded}</div>
          </div>
          <hr style={{ margin: '10px 0', width: '100%' }} />
        </header>
        <p className="summary">{description_full ?? 'No Summary ......'}</p>
      </div>
    </DetailComponentBlock>
  );
};

export default DetailComponent;
