import styled from "styled-components";

export const StyledCommunity = styled.section`
  .community {
    &-list {
      width: 50%;
      .infinite-scroll-component {
        overflow: hidden !important;
      }
    }
    &-card {
      margin-top: 40px;
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
    &-playerBox {
      margin-top: 30px;
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      height: 0;
      border-radius: 12px;
      overflow: hidden;
    }
    &-playerRef {
      position: absolute;
      inset: 0;
    }
    &-playerMedia {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
