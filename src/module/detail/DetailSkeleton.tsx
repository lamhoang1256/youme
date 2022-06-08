import CommentSkeleton from "components/commentTest/CommentSkeleton";

import { AnimationSkeleton } from "assets/styles/_mixins";
import styled from "styled-components";

const StyleDetailSkeleton = styled.div`
  .skeleton {
    &-top {
      display: flex;
      gap: 30px;
    }
    &-thumb {
      margin: 0 auto;
      width: 220px;
      height: 310px;
      border-radius: 20px;
      ${AnimationSkeleton}
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
      height: 27px;
      width: 250px;
      ${AnimationSkeleton}
      border-radius: 4px;
    }
    &-score {
      height: 27px;
      width: 70px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-introduction {
      height: 140px;
      width: 100%;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-categoríes {
      display: flex;
      gap: 5px 20px;
    }
    &-category-label {
      height: 20px;
      width: 100px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-category {
      height: 20px;
      width: 80px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-action {
      display: flex;
      gap: 14px;
    }
    &-watch {
      width: 210px;
      height: 50px;
      border-radius: 40px;
      ${AnimationSkeleton}
    }
    &-circle {
      width: 50px;
      height: 50px;
      border-radius: 100rem;
      ${AnimationSkeleton}
    }
    &-bottom {
      margin-top: 30px;
    }
    &-summary {
      height: 110px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-banner {
      margin: 30px 0;
      height: 250px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    @media screen and (max-width: 767.98px) {
      &-top {
        flex-direction: column;
      }
      &-action {
        margin-top: 10px;
      }
    }
  }
`;

const DetailSkeleton = () => {
  return (
    <StyleDetailSkeleton>
      <div className="skeleton-top">
        <div className="skeleton-thumb" />
        <div className="skeleton-main">
          <div className="skeleton-header">
            <div className="skeleton-heading" />
            <div className="skeleton-score" />
          </div>
          <div className="skeleton-introduction" />
          <div className="skeleton-categoríes">
            <div className="skeleton-category-label" />
            <div className="skeleton-category" />
            <div className="skeleton-category" />
            <div className="skeleton-category" />
          </div>
          <div className="skeleton-action">
            <div className="skeleton-watch" />
            <div className="skeleton-circle" />
            <div className="skeleton-circle" />
          </div>
        </div>
      </div>
      <div className="skeleton-bottom">
        <div className="skeleton-summary" />
        <div className="skeleton-banner" />
      </div>
      <CommentSkeleton />
    </StyleDetailSkeleton>
  );
};

export default DetailSkeleton;
