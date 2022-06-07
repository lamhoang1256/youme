import styled from "styled-components";

export const StyledCommunity = styled.section`
  .list {
    width: 50%;
    margin: 0 auto;
  }
  .list .infinite-scroll-component {
    overflow: hidden !important;
  }
  .card {
    margin-top: 60px;
  }
  .header {
    display: flex;
    gap: 20px;
  }
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 100rem;
  }
  .overview {
    flex: 1;
  }
  .actions {
    display: flex;
    gap: 12px;
    text-align: center;
  }
  .action span {
    display: block;
    margin-top: 10px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea;
    width: 4rem;
    height: 4rem;
    padding: 7px;
    border-radius: 50%;
    color: #000;
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1023.98px) {
    .list {
      width: 70%;
    }
  }
  @media screen and (max-width: 767.98px) {
    .list {
      width: 100%;
    }
  }
`;
