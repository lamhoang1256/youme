import styled from "styled-components";

export const StyledHeaderUser = styled.div`
  position: relative;
  .user {
    min-width: 270px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 20;
    top: 130%;
    right: 0;
    background-color: #4c505c;
    padding: 20px 10px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &-header {
      display: flex;
      align-items: center;
      gap: 8px;
      width: max-content;
    }
    &-avatar {
      width: 45px;
      height: 45px;
      border-radius: 100rem;
    }
    &-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 6px;
    }
    &-username {
      font-weight: 700;
    }
    &-list {
      margin-top: 15px;
    }
    &-item {
      padding: 12px 10px;
      border-radius: 6px;
    }
    &-item:hover {
      background-color: #303339;
    }
    &-link {
      display: flex !important;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--white);
      transition: all 0.25s linear;
    }
  }
  &:hover .user {
    opacity: 1;
    visibility: visible;
  }
`;
