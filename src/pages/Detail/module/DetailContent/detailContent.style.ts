import styled from "styled-components";

export const StyledDetailHeader = styled.div`
  display: flex;
  gap: 30px;
  .detail {
    &-poster img {
      margin: 0 auto;
      width: 220px;
      height: 310px;
      border-radius: 20px;
      overflow: hidden;
      background-color: var(--bg-skeleton);
    }
    &-main {
      flex: 1;
      gap: 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-score {
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.8rem;
    }
    &-score span {
      font-size: 2.2rem;
      color: #e8b647;
    }
    &-introduction {
      line-height: 1.8;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    &-categoríes {
      display: flex;
      flex-wrap: wrap;
      gap: 5px 20px;
    }
    &-category {
      color: var(--white);
      transition: all 0.25s linear;
    }
    &-category:hover {
      color: var(--primary-color);
    }
    &-action {
      display: flex;
      gap: 14px;
    }
    &-watch {
      width: 210px;
      height: 50px;
      border-radius: 40px;
    }
    &-button {
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 100rem;
      border: 1px solid gray;
      background-color: transparent;
    }
    &-favorite {
      border: 2px solid #e96565;
      color: #e96565;
    }
    &-share {
      color: var(--white);
    }
  }
  @media screen and (max-width: 767.98px) {
    flex-direction: column;
    .detail {
      &-action {
        margin-top: 10px;
      }
    }
  }
`;

export const StyledDetailMain = styled.div`
  margin-top: 30px;
  .detail {
    &-summary {
      line-height: 1.9;
    }
    &-banner {
      margin: 30px auto 0;
      width: 100%;
      max-width: 750px;
      aspect-ratio: auto 750/422;
      background-color: var(--bg-skeleton);
      border-radius: 14px;
      overflow: hidden;
    }
    &-banner img {
    }
  }
`;
