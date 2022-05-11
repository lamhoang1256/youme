import styled from "styled-components";

export const StyledSlider = styled.div`
  margin-top: 40px !important;
  height: 250px;
  .slick-slide {
    margin: 0 26px;
  }
  .slick-list {
    height: 100%;
    overflow-x: hidden;
  }
  .slick-slide > div > div {
    outline: none;
    border: none;
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
  @media screen and (max-width: 1023.98px) {
    padding: 0 20px;
    .slick-slide {
      margin: 0 16px;
    }
  }
  @media screen and (max-width: 767.98px) {
    .slick-slide {
      margin: 0px;
    }
  }
`;

export const StyledBanner = styled.div`
  position: relative;
  height: 250px;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
