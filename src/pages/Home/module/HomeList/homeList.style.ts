import styled from "styled-components";

export const StyledHomeList = styled.div`
  margin-left: -15px;
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 100;
    background-color: red;
    &::before {
      display: none;
    }
  }
`;
