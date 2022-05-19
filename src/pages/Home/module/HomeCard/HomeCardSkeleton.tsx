import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

const StyledHomeCardSkeleton = styled.div`
  .skeleton-img {
    border-radius: 4px;
    aspect-ratio: auto 563 / 788;
    margin-bottom: 10px;
    ${AnimationSkeleton}
  }
  .skeleton-name {
    height: 15px;
    margin-top: 4px;
    border-radius: 2px;
    ${AnimationSkeleton}
  }
`;

const HomeCardSkeleton = () => {
  return (
    <StyledHomeCardSkeleton>
      <div className="skeleton-img" />
      <div className="skeleton-name" />
      <div className="skeleton-name" />
    </StyledHomeCardSkeleton>
  );
};

export default HomeCardSkeleton;
