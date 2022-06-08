import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

const StyledWatchInfoSkeleton = styled.div`
  margin-top: 25px;
  .skeleton {
    &-name,
    &-meta {
      margin-bottom: 15px;
      height: 25px;
      width: 405px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    &-meta {
      height: 28px;
      width: 500px;
    }
    &-categories {
      display: flex;
      gap: 20px;
    }
    &-category {
      width: 80px;
      height: 30px;
      border-radius: 14px;
      ${AnimationSkeleton}
    }
    &-desc {
      margin-top: 18px;
      height: 100px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
    @media screen and (max-width: 767.98px) {
      &-name {
        width: 230px;
      }
      &-meta {
        width: 280px;
      }
    }
  }
`;

const WatchInfoSkeleton = () => {
  return (
    <StyledWatchInfoSkeleton>
      <div className="skeleton-name" />
      <div className="skeleton-meta" />
      <div className="skeleton-categories">
        <div className="skeleton-category" />
        <div className="skeleton-category" />
        <div className="skeleton-category" />
      </div>
      <div className="skeleton-desc" />
    </StyledWatchInfoSkeleton>
  );
};

export default WatchInfoSkeleton;
