import styled from "styled-components";

export const StyledSuggestSide = styled.div`
  margin-top: 40px;
  .suggest-label {
    margin-bottom: 20px;
  }
  .movie-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
  .movie-item {
    display: flex;
    gap: 10px;
  }
  .movie-thumb {
    width: 30%;
    img {
      border-radius: 6px;
      object-fit: cover;
    }
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
  @media screen and (max-width: 670.98px) {
    .movie-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
