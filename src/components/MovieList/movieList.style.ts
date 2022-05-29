import styled from "styled-components";

export const StyledMovieList = styled.div`
  .movie-list {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
    grid-gap: 15px;
  }
  @media screen and (max-width: 640px) {
    .movie-list {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;
