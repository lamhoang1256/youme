import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import SkeletonTitle from "components/Skeleton/SkeletonTitle";
import { AnimationSkeleton } from "assets/styles/_mixins";

export const StyledSideSkeleton = styled.div`
  --aspect-ratio: auto 1333 / 1866;
  .skeleton-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }
  .skeleton-item {
    display: flex;
    gap: 10px;
  }
  .skeleton-thumb {
    width: 30%;
    aspect-ratio: auto 563 / 789;
    ${AnimationSkeleton}
    border-radius: 4px;
  }
  .skeleton-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  .skeleton-name {
    ${AnimationSkeleton}
    height: 34px;
    border-radius: 4px;
  }
  .skeleton-category {
    margin-top: 10px;
    border-radius: 4px;
    ${AnimationSkeleton}
    height: 15px;
    width: 60px;
  }
  .skeleton-rate {
    margin-top: 10px;
    border-radius: 4px;
    ${AnimationSkeleton}
    height: 16px;
    width: 70px;
  }
  .skeleton-bottom {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .skeleton-bottom-item {
    border-radius: 4px;
    ${AnimationSkeleton}
    height: 15px;
    width: 60px;
  }
  @media screen and (max-width: 1023.98px) {
    .skeleton-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 767.98px) {
    .skeleton-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 540.98px) {
    .skeleton-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SkeletonSideRelated = () => {
  return (
    <StyledSideSkeleton>
      <SkeletonTitle />
      <div className="skeleton-list">
        {Array(6)
          .fill(0)
          .map(() => (
            <div className="skeleton-item" key={uuidv4()}>
              <div className="skeleton-thumb" />
              <div className="skeleton-content">
                <div className="skeleton-top">
                  <div className="skeleton-name" />
                  <div className="skeleton-category" />
                  <div className="skeleton-rate" />
                </div>
                <div className="skeleton-bottom">
                  <div className="skeleton-bottom-item" />
                  <div className="skeleton-bottom-item" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </StyledSideSkeleton>
  );
};

export default SkeletonSideRelated;
