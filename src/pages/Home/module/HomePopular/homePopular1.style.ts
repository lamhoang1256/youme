import styled from "styled-components";

export const StyledPopularList = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  h3 {
    margin-bottom: 14px;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-slider {
    margin-left: -15px;
  }
  .slick-dots {
    bottom: -30px;
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
    .slick-slide {
      margin: 0;
    }
    .slick-slider {
      margin-left: 0;
    }
  }
`;

export const StyledPopularCard = styled.div`
  height: 100%;
  padding: 0 10px;
  img {
    width: 100%;
    /* height: 160px; */
    border-radius: 8px;
    object-fit: cover;
  }
  p {
    padding-top: 14px;
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
    /* img {
      height: 180px;
    } */
  }
  @media screen and (max-width: 540px) {
    padding: 0;
  }
`;
