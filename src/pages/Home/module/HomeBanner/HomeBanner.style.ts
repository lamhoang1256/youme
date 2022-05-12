import styled from "styled-components";

export const StyledBanner = styled.div`
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
  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 200px;
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
