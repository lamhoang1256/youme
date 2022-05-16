import styled from "styled-components";

export const StyledDetailContent = styled.div`
  padding-top: 20px;
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
      color: var(--black);
    }
    button.is-active {
      background-color: var(--primary-color);
      color: var(--white);
    }
  }
`;
