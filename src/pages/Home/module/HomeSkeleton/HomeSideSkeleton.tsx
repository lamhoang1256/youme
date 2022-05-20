import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

const StyledHomeSideSkeleton = styled.div`
  .skeleton-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
  .skeleton-item {
    display: flex;
    gap: 10px;
  }
  .skeleton-thumb {
    width: 40%;
    aspect-ratio: auto 750 / 422;
    ${AnimationSkeleton}
    border-radius: 4px;
  }
  .skeleton-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .skeleton-name {
    height: 30px;
    ${AnimationSkeleton}
    border-radius: 4px;
  }
  .skeleton-rank {
    margin-bottom: 10px;
    height: 16px;
    ${AnimationSkeleton}
    border-radius: 4px;
  }
`;

const HomeSideSkeleton = () => {
  return (
    <StyledHomeSideSkeleton>
      <div className="skeleton-list">
        {Array(4)
          .fill(0)
          .map(() => (
            <div className="skeleton-item" key={uuidv4()}>
              <div className="skeleton-thumb" />
              <div className="skeleton-content">
                <div className="skeleton-rank" />
                <div className="skeleton-name" />
              </div>
            </div>
          ))}
      </div>
    </StyledHomeSideSkeleton>
  );
};

export default HomeSideSkeleton;
