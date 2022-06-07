import { AnimationSkeleton } from "assets/styles/_mixins";
import styled from "styled-components";

const StyledTrendingSkeleton = styled.div`
  padding: 0 10px;
  .card {
    margin-left: 5px;
  }
  .thumbnail {
    border-radius: 8px;
    aspect-ratio: auto 792 / 445;
    ${AnimationSkeleton}
  }
  .title {
    border-radius: 4px;
    margin-top: 10px;
    height: 19px;
    ${AnimationSkeleton}
  }
`;

const HomeTrendingSkeleton = () => {
  return (
    <StyledTrendingSkeleton>
      <div className="card">
        <div className="thumbnail" />
        <div className="title" />
      </div>
    </StyledTrendingSkeleton>
  );
};

export default HomeTrendingSkeleton;
