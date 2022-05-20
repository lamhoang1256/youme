import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

export const StyledBanner = styled.div`
  --aspect-ratio: auto 1440 / 512;
  --border-radius: 10px;
  border-radius: var(--border-radius);
  height: 510px;
  background-color: var(--bg-skeleton);

  .banner-loading {
    ${AnimationSkeleton}
    background-size: 100% 100%;
    animation-duration: 4s;
    border-radius: var(--border-radius);
    aspect-ratio: var(--aspect-ratio);
  }

  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slick-list {
    border-radius: var(--border-radius);
  }
  .slick-slide > div > div {
    outline: none;
    border: none;
    border-radius: var(--border-radius);
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
    }
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 1440px) {
    height: 40vw;
    .banner-img {
      height: 40vw;
    }
  }
  @media screen and (max-width: 750px) {
    height: 54vw;
    .banner-img {
      height: 54vw;
    }
  }

  @media screen and (max-width: 767.98px) {
    --aspect-ratio: auto 792 / 445;
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
`;
