import styled from "styled-components";

export const StyledWatchInfo = styled.div`
  padding-top: 20px;
  line-height: 1.7;
  .watch {
    &-statistics {
      --gap-x: 32px;
      --gap-y: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: var(--gap-y) var(--gap-x);
      overflow: hidden;
      li {
        position: relative;
      }
      li:last-child::after {
        display: none;
      }
      li::after {
        content: "";
        position: absolute;
        right: calc(var(--gap-x) * -1);
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 100rem;
        background-color: var(--primary-color);
      }
    }
    &-areas {
      display: flex;
      gap: 8px;
    }
    &-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 20px;
      margin: 14px 0;
    }
    &-category {
      height: 31px;
      line-height: 31px;
      padding: 0 12px;
      background-color: #434b5a;
      color: var(--white);
      border-radius: 14px;
      transition: all 0.25s linear;
      &:hover {
        background-color: var(--primary-color);
      }
    }
    &-upcoming {
      margin-bottom: 10px;
    }
  }
`;
