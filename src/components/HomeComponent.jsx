import React from 'react';
import styled from 'styled-components';

const HomeComponentBlock = styled.div`
  & {
    padding: 10px 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  & > .movie_item {
    height: 300px;
    width: 400px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  & > .movie_item > .movie_image {
    height: 300px;
    width: 50%;
    border: 0;
    box-shadow: 0 0 2px 2px;
    cursor: pointer;
  }

  & > .movie_item > .movie_summary {
    margin: 0 20px;
  }

  & > .movie_title {
    font-size: 1.5rem;
  }

  & > .movie_item > .movie_summary > .summary_wrapper {
    position: absolute;
    width: 200px;
    top: 0;
    left: 80px;
    right: 0;
    bottom: 0;
    z-index: 10;
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
  }
`;

const HomeComponent = ({ id, title, summary, large_cover_image }) => {
  // const changeOpacityOne = id => {
  //   console.log(id);
  //   console.log(document.getElementById(`${id}`).children);
  // };

  // const changeOpacityZero = id => {
  //   console.log(id);
  //   console.log(document.getElementById(`${id}`).children);
  // };
  return (
    <HomeComponentBlock id={id}>
      <div className="movie_item">
        {large_cover_image && (
          <img src={large_cover_image} alt={title} className="movie_image" />
        )}
        <div className="movie_summary">
          <div className="summary_wrapper">
            {summary && <p className="summary">{summary}</p>}
            {!summary && <p className="summary">No Summary ......</p>}
          </div>
        </div>
      </div>
      <strong className="movie_title">{title}</strong>
    </HomeComponentBlock>
  );
};

export default HomeComponent;
