import styled from "styled-components";

export const StyledMovieCard = styled.div`
  &:hover {
    .card-poster .poster {
      filter: brightness(0.4);
    }
    .card-name {
      color: var(--primary-color);
    }
    .card-play {
      opacity: 1;
      visibility: visible;
    }
  }
  .card-poster {
    position: relative;
    padding-top: 140%;
    background-color: var(--bg-load-image);
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.25s linear;
  }
  .card-play {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    transition: all 0.25s linear;
  }
  .lazy-load-image-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .card-poster .poster {
    height: 100%;
  }
  .card-name {
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    transition: all 0.25s linear;
  }
`;
