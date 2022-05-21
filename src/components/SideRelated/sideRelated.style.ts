import styled from "styled-components";

export const StyledSideRelated = styled.div`
  .movie-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }
  .movie-item {
    display: flex;
    gap: 10px;
  }
  .movie-thumb {
    width: 30%;
    background-color: var(--bg-skeleton);
    border-radius: 6px;
    overflow: hidden;
    aspect-ratio: auto 170/238;
  }
  .movie-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  .movie-name {
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  .movie-categories {
    display: flex;
    gap: 10px;
    margin-top: 6px;
    span {
      font-size: 1.5rem;
      color: #818185;
    }
  }
  .movie-bottom {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
  }
  .movie-rate {
    margin-top: 10px;
    color: #edb709;
  }
  @media screen and (max-width: 1023.98px) {
    .movie-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 767.98px) {
    .movie-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 540.98px) {
    .movie-list {
      grid-template-columns: repeat(1, 1fr);
    }
    .movie-name {
      font-size: 2rem;
    }
    .movie-categories span {
      font-size: 1.7rem;
    }
  }
`;
