import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

export const StyledBanner = styled.div`
  --aspect-ratio: auto 1270 / 450;
  --border-radius: 10px;
  background-color: var(--bg-skeleton);
  border-radius: var(--border-radius);
  aspect-ratio: var(--aspect-ratio);
  .banner {
    object-fit: cover;
    min-height: 200px;
  }
  .banner-loading {
    ${AnimationSkeleton}
    background-size: 100% 100%;
    animation-duration: 4s;
    aspect-ratio: var(--aspect-ratio);
  }
  .slick-list {
    max-height: 510px;
    height: 100%;
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
    &::before {
      display: none;
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
