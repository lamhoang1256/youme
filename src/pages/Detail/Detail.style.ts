import styled from "styled-components";

export const StyledDetail = styled.div`
  .detail-banner {
    object-fit: cover;
    border-radius: 14px;
  }
  .detail-categories,
  .detail-areas {
    display: flex;
    gap: 14px;
  }
  .detail-episodes {
    display: flex;
    gap: 10px;
    button {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
  }
`;
