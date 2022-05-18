import styled from "styled-components";

export const StyledHomeList = styled.div`
  margin: 30px 0;
  .home-title {
    margin: 20px 0;
  }
  .home-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
    grid-gap: 20px;
    @media screen and (max-width: 640px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;
