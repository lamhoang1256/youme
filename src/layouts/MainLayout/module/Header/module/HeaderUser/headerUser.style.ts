import styled from "styled-components";

export const StyledHeaderUser = styled.div`
  position: relative;
  .header-avatar,
  .dropdown-avatar {
    width: 45px;
    height: 45px;
    border-radius: 100rem;
  }
  &:hover .dropdown {
    opacity: 1;
    visibility: visible;
  }
  .dropdown {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: var(--zIndex-header-dropdown);
    top: 130%;
    right: 0;
    background-color: #4c505c;
    padding: 20px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &-header {
      display: flex;
      align-items: center;
      gap: 8px;
      width: max-content;
    }
    &-user {
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
  .logout {
    padding: 0;
    background-color: transparent;
  }
`;
