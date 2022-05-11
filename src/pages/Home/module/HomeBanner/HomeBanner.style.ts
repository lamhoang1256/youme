import styled from "styled-components";

export const StyledSlider = styled.div`
  margin-top: 40px !important;
  height: 250px;
  .slick-slider {
    height: 100%;
  }
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
    display: block;
    background: var(--primary-color);
    width: 40px;
    height: 40px;
    z-index: 100;
    border-radius: 100rem;
    &::before {
      display: none;
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
