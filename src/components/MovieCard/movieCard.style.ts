import styled from "styled-components";

export const StyledMovieCard = styled.div`
  .card-thumb {
    position: relative;
    padding-top: 140%;
    background-color: var(--bg-load-image);
    width: 100%;
    object-fit: cover;
    .lazy-load-image-background {
      position: absolute;
      inset: 0;
      border-radius: 6px;
      overflow: hidden;
    }
    img {
      height: 100%;
    }
  }
  .card-name {
    text-align: center;
    padding-top: 10px;
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;
