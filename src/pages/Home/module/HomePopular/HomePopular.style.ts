import styled from "styled-components";

export const StyledPopularList = styled.div`
  width: 100%;
  height: 210px;
  h3 {
    margin-bottom: 14px;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
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
`;

export const StyledPopularCard = styled.div`
  width: 260px;
  height: 210px;
  img {
    width: 100%;
    height: 150px;
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
`;
