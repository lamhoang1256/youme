import styled from "styled-components";

export const StyledHomeSide = styled.div`
  position: sticky;
  top: 20px;
  left: 0;
  right: 0;
  .side {
    &-list {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 20px;
      max-height: 90vh;
      overflow: auto;
      padding-right: 10px;
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
    &-item {
      display: flex;
      gap: 10px;
      &:nth-child(1) .side-rank {
        color: #efa5a4;
      }
      &:nth-child(2) .side-rank {
        color: #ff0000;
      }
      &:nth-child(3) .side-rank {
        color: #d3a446;
      }
    }
    &-thumb {
      width: 40%;
    }
    &-thumb img {
      border-radius: 4px;
    }
    &-content {
      flex: 1;
    }
    &-name {
      font-size: 1.45rem;
      color: var(--white);
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      font-weight: 500;
    }
    &-rank {
      color: #3d6ef7;
      margin-bottom: 10px;
      font-weight: 600;
    }
    @media screen and (max-width: 1023.98px) {
      &-list {
        grid-template-columns: repeat(2, 1fr);
      }
      &-thumb {
        width: unset;
      }
    }
    @media screen and (max-width: 767.98px) {
      &-list {
        grid-template-columns: 100%;
      }
    }
  }
`;
