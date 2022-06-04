import { AnimationSkeleton } from "assets/styles/_mixins";
import styled from "styled-components";

export const StyledTrendingList = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
  h3 {
    margin-bottom: 14px;
  }
  .trending-name {
    color: var(--white);
    font-weight: 500;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    z-index: var(--zIndex-popular-list);
  }
  .slick-slider {
    margin-left: -10px;
  }
  .slick-dots {
    top: -40px;
    text-align: right;
    z-index: 10;
    li.slick-active {
      width: 30px;
      background-color: var(--primary-color);
    }
    li {
      background-color: #8da0bc;
      border-radius: 100rem;
      width: 10px;
      height: 10px;
      margin: 0 6px;
      transition: all 0.35s linear;
    }
    li button::before {
      display: none;
    }
  }
  @media screen and (max-width: 767.98px) {
    .slick-list {
      margin-bottom: 50px;
    }
    .slick-slide {
      margin: 0;
    }
    .slick-slider {
      margin-left: 0;
    }
    .slick-dots {
      top: unset;
      bottom: -25px;
      text-align: center;
    }
  }
`;

export const StyledTrendingCard = styled.div`
  height: 100%;
  padding: 0 10px;
  .trending-skeleton {
    margin-left: 5px;
  }
  .trending-skeleton-thumb {
    border-radius: 8px;
    aspect-ratio: auto 792 / 445;
    ${AnimationSkeleton}
  }
  .trending-skeleton-name {
    border-radius: 4px;
    margin-top: 10px;
    height: 19px;
    ${AnimationSkeleton}
  }
  .trending-thumb {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: auto 792 / 445;
    background-color: var(--bg-load-image);
  }
  .trending-name {
    padding-top: 10px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  @media screen and (max-width: 767.98px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    padding: 0;
  }
`;
