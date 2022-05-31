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
  .language {
    --speed3: cubic-bezier(0.26, 0.48, 0.08, 0.9);
    --height: 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    .language-switcher {
      position: relative;
      display: inline-block;
      width: calc(var(--height) * 2);
      height: var(--height);
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      box-shadow: 0 3px 64px rgba(var(--primary-color), 0.1);
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: var(--height);
      width: var(--height);
      left: 0;
      bottom: 0;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    input:checked + .slider {
      background-color: var(--primary-color);
    }
    input:focus + .slider {
      box-shadow: none;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(var(--height));
      -ms-transform: translateX(var(--height));
      transform: translateX(var(--height));
    }
    .slider.round {
      border-radius: var(--height);
    }
    .slider.round:before {
      border-radius: 50%;
    }
  }
`;
