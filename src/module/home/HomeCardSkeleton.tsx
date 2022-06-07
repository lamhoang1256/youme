import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

const StyledHomeCardSkeleton = styled.div`
  .skeleton-poster {
    border-radius: 4px;
    aspect-ratio: auto 563 / 788;
    margin-bottom: 10px;
    ${AnimationSkeleton}
  }
  .skeleton-title {
    height: 15px;
    margin-top: 4px;
    border-radius: 2px;
    ${AnimationSkeleton}
  }
`;

const HomeCardSkeleton = () => {
  return (
    <StyledHomeCardSkeleton>
      <div className="skeleton-poster" />
      <div className="skeleton-title" />
      <div className="skeleton-title" />
    </StyledHomeCardSkeleton>
  );
};

export default HomeCardSkeleton;
