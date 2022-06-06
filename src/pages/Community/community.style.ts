import styled from "styled-components";

export const StyledCommunity = styled.section`
  .community {
    &-list {
      width: 50%;
      margin: 0 auto;
      .infinite-scroll-component {
        overflow: hidden !important;
      }
    }
    &-card {
      margin-top: 60px;
    }
    &-header {
      display: flex;
      gap: 20px;
    }
    &-avatar {
      width: 60px;
      height: 60px;
      border-radius: 100rem;
    }
    &-info {
      flex: 1;
    }
    &-introduction {
      margin-top: 4px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    &-actions {
      display: flex;
      gap: 12px;
      text-align: center;
    }
    &-action span {
      display: block;
      margin-top: 10px;
    }
    &-icon {
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
    &-playerBox {
      margin-top: 30px;
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      height: 0;
    }
    &-playerRef {
      position: absolute;
      inset: 0;
    }
    &-playerMedia {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
    @media screen and (max-width: 1023.98px) {
      &-list {
        width: 70%;
      }
    }
    @media screen and (max-width: 767.98px) {
      &-list {
        width: 100%;
      }
      &-playerBox {
        padding-top: 100%;
      }
    }
  }
`;
