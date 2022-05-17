import styled from "styled-components";

export const StyledHomeList = styled.div`
  margin: 30px 0;
  .home-title {
    margin: 20px 0;
  }
  .home-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 1300px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1023.98px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media screen and (max-width: 879.98px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 600.98px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
