import styled from "styled-components";
import { TextClamp } from "assets/styles/_mixins";

export const StyledMovieCard = styled.div`
  .card-media {
    position: relative;
    padding-top: 140%;
    background-color: var(--bg-load-image);
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.25s linear;
  }
  .card-poster {
    height: 100%;
  }
  .lazy-load-image-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .card-title {
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    color: var(--white);
    ${TextClamp.multilines(2)};
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
  &:hover {
    .card-poster {
      filter: brightness(0.4);
    }
    .card-title {
      color: var(--primary-color);
    }
    .card-play {
      opacity: 1;
      visibility: visible;
    }
  }
`;
