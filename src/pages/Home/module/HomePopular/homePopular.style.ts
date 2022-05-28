import { AnimationSkeleton } from "assets/styles/_mixins";
import styled from "styled-components";

export const StyledPopularList = styled.div`
  width: 100%;
  height: auto;
  h3 {
    margin-bottom: 14px;
  }
  .popular-name {
    color: var(--white);
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    z-index: 40;
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

export const StyledPopularCard = styled.div`
  height: 100%;
  padding: 0 10px;
  .popular-skeleton {
    margin-left: 5px;
  }
  .popular-skeleton-thumb {
    border-radius: 8px;
    aspect-ratio: auto 792 / 445;
    ${AnimationSkeleton}
  }
  .popular-skeleton-name {
    border-radius: 4px;
    margin-top: 10px;
    height: 19px;
    ${AnimationSkeleton}
  }
  .popular-thumb {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: auto 792 / 445;
    background-color: var(--bg-load-image);
  }
  .popular-name {
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

export const settingsPopular = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
