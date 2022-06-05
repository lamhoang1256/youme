import styled from "styled-components";

export const StyledHeaderLanguage = styled.div`
  position: relative;
  .language {
    &-switcher {
      background-color: transparent;
      font-size: 2.4rem;
      color: var(--white);
    }
    &-list {
      position: absolute;
      top: 120%;
      right: 0;
      border-radius: 4px;
      padding: 10px;
      background-color: #0d0d0d;
      z-index: 100;
    }
    &-item {
      button {
        font-weight: 600;
        padding: 8px 10px;
        color: var(--white);
        background-color: transparent;
      }
    }
  }
`;
