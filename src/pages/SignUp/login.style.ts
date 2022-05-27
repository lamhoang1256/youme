import styled from "styled-components";

export const StyledButtonLogin = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border-radius: 6px;
  line-height: 2.4rem;
  font-weight: 600;
`;

export const StyledLogin = styled.div`
  .login {
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/fd873ca8-2d92-4212-a5e2-82f07089566a/VN-vi-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }
    &-container {
      position: relative;
      max-width: 500px;
      padding: 50px 60px;
      background-color: var(--dark-color);
      border-radius: 10px;
      z-index: 2;
    }
    &-main {
      margin-top: 40px;
    }
    &-label {
      display: block;
      color: #c4c1ea;
      font-size: 1.4rem;
      margin: 8px 0;
    }
    &-primary {
      color: #fff;
      font-weight: 700;
      border-radius: 6px;
      border: 1px solid #8a3cff;
      background-image: linear-gradient(270deg, #c042ff, #8a3cff);
    }
    &-other {
      margin: 14px 0;
      text-align: center;
    }
    &-other span {
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        border: 1px solid #9692c7;
        width: 88px;
      }
      &::before {
        left: 30px;
      }
      &:after {
        right: 30px;
      }
    }
    &-facebook {
      color: #fff;
      background-color: #404eed;
    }
    &-google {
      background-color: #fff;
    }
    &-no-acount {
      padding-top: 20px;
      text-align: center;
    }
    &-no-acount a {
      color: #3d6ef7;
    }
    @media screen and (max-width: 767.98px) {
      &-poster {
        display: none;
      }
      &-container {
        max-width: 100%;
      }
    }
  }
`;
