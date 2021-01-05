import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeComponentBlock = styled.div`
  & {
    padding: 20px 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
  }

  & > .movie_item {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
  }

  & > .movie_item > .movie_image {
    width: 200px;
    height: 300px;
    ${'' /* border: 0; */}
    ${'' /* box-shadow: 0 0 2px 2px; */}
    cursor: pointer;
    border-radius: 10px;
    background-color: #e0e0e0;
    box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
  }

  & > .movie_item > .movie_summary {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  & > .movie_title {
    z-index: 2;
    font-size: 1.5rem;
    text-decoration: none;
    color: #0f202d;
    word-wrap: break-word;
    font-weight: 700;
  }

  & > .movie_item > .movie_summary > .summary_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
    font-size: 1.1rem;
    font-weight: 700;
    word-wrap: break-word;
    background-color: #0f202d;
    color: aliceblue;
    opacity: 0;
    overflow: auto;
    transition-duration: 0.2s;
  }

  & > .movie_item > .movie_summary > .summary_wrapper > .summary {
    padding: 0 7px;
    width: 169px;
    height: 300px;
  }
`;

const HomeComponent = ({ id, title, summary, large_cover_image }) => {
  const onImageError = e => {
    e.target.onerror = null;
    e.target.src = process.env.PUBLIC_URL + '/NoImage.png';
  };
  const changeOpacityToOne = e => {
    e.currentTarget.style = 'opacity: 1';
  };
  const changeOpacityToZero = e => {
    e.currentTarget.style = 'opacity: 0';
  };

  return (
    <HomeComponentBlock id={id}>
      <div className="movie_item">
        {large_cover_image && (
          <img
            src={large_cover_image}
            alt={title}
            className="movie_image"
            onError={onImageError}
          />
        )}
        <div className="movie_summary">
          <div
            className="summary_wrapper"
            onMouseOver={changeOpacityToOne}
            onMouseLeave={changeOpacityToZero}>
            {summary && <p className="summary">{summary}</p>}
            {!summary && <p className="summary">No Summary ......</p>}
          </div>
        </div>
      </div>
      <Link to={`/${id}`} className="movie_title">
        {title}
      </Link>
    </HomeComponentBlock>
  );
};

export default HomeComponent;
