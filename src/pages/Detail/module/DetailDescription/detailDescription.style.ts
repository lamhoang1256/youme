import styled from "styled-components";

export const StyledDetailDescription = styled.div`
  margin-top: 30px;
  .detail {
    &-summary {
      line-height: 1.9;
    }
    &-banner {
      margin: 30px auto;
      width: 100%;
      max-width: 750px;
      aspect-ratio: auto 750/422;
      background-color: var(--bg-skeleton);
      border-radius: 14px;
      overflow: hidden;
    }
    &-banner img {
    }
  }
`;
