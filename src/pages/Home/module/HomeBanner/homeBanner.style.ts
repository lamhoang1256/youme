import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

export const StyledBanner = styled.div`
  --aspect-ratio: auto 1440 / 512;
  --border-radius: 14px;
  height: 510px;
  border-radius: var(--border-radius);
  background-color: var(--bg-skeleton);
  .banner-loading {
    ${AnimationSkeleton}
    background-size: 100% 100%;
    animation-duration: 4s;
    border-radius: var(--border-radius);
    aspect-ratio: var(--aspect-ratio);
  }
  .slick-list {
    height: 100%;
    border-radius: var(--border-radius);
  }
  .slick-slide > div > div {
    outline: none;
    border: none;
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
    }
    &::before {
      display: none;
    }
  }
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
