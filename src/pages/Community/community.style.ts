import styled from "styled-components";

export const StyledCommunity = styled.section`
  .list {
    width: 50%;
    margin: 0 auto;
  }
  .list .infinite-scroll-component {
    overflow: hidden !important;
  }
  @media screen and (max-width: 1023.98px) {
    .list {
      width: 70%;
    }
  }
  @media screen and (max-width: 767.98px) {
    .list {
      width: 100%;
    }
  }
`;
