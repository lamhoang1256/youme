import styled from "styled-components";

export const StyledHomeActors = styled.div`
  .actor-title {
    margin: 30px 0;
  }
  .actor-avatar {
    padding: 0 10px;
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
`;
