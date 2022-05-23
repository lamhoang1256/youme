import styled from "styled-components";

export const StyledDetailHeader = styled.div`
  display: flex;
  gap: 30px;
  .detail {
    &-thumb img {
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
    &-header {
      display: flex;
      align-items: center;
      gap: 30px;
    }
    &-heading {
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &-score {
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
      color: var(--secondary-color);
    }
    &-action {
      display: flex;
      gap: 14px;
    }
    &-watch {
      width: 210px;
      height: 50px;
      border-radius: 40px;
      color: var(--white);
      background-color: var(--secondary-color);
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
    .detail-action {
      margin-top: 10px;
    }
  }
`;
