import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

export const StyledBanner = styled.div`
  --aspesct-radion: auto 1270 / 450;
  aspect-ratio: var(--aspesct-radion);
  background-color: var(--bg-skeleton);
  border-radius: 10px;
  .banner {
    object-fit: cover;
    min-height: 200px;
  }
  .banner-loading {
    aspect-ratio: var(--aspesct-radion);
    ${AnimationSkeleton}
    background-size: 100% 100%;
    animation-duration: 4s;
  }
  .slick-list {
    max-height: 510px;
    height: 100%;
    border-radius: 12px;
  }
  .slick-slide > div > div {
    outline: none;
    border: none;
    border-radius: 10px;
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 100;
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 767.98px) {
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
`;
