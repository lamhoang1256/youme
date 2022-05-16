import styled from "styled-components";

export const StyledWatch = styled.div`
  .detail-banner {
    object-fit: cover;
    border-radius: 14px;
  }
  .detail-categories,
  .detail-areas {
    display: flex;
    gap: 14px;
  }
  .watch-episodes {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 14px 0;
    button {
      width: 40px;
      height: 40px;
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
