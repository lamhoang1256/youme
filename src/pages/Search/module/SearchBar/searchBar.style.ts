import styled from "styled-components";

export const StyledSearchBar = styled.div`
  margin-bottom: 20px;
  position: relative;
  .searchbar {
    position: relative;
    background-color: #39354d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-input {
      border-radius: 10px;
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      padding: 16px 20px;
      height: 100%;
      font-size: 1.7rem;
      min-height: 45px;
      color: var(--white);
      border: 1px solid transparent;
    }
    &-input:focus {
      border: 1px solid var(--primary-color);
    }
    &-input::placeholder {
      color: #eee;
    }
    &-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 12px;
      font-size: 2rem;
      cursor: pointer;
      color: rgb(138, 147, 155);
      background-color: transparent;
    }
    &-result {
      position: absolute;
      top: 110%;
      left: 0;
      right: 0;
      background-color: var(--dark-color);
      z-index: var(--zIndex-search-result);
      border-radius: 8px;
      height: 400px;
      overflow-y: scroll;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      &::-webkit-scrollbar-thumb {
        background-image: linear-gradient(-45deg, #6a5af9, #d66efd);
        border-radius: 50px;
      }
    }
    &-result li {
      padding: 14px;
      transition: all 0.25s linear;
      a {
        color: var(--white);
      }
      em {
        color: var(--primary-color);
        font-weight: 600;
      }
      &:hover {
        background-color: #666666;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0 auto 30px;
  }
`;
