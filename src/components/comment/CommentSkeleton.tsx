import { AnimationSkeleton } from "assets/styles/_mixins";
import SkeletonTitle from "components/skeleton/SkeletonTitle";
import styled from "styled-components";

const StyledCommentSkeleton = styled.div`
  .skeleton {
    &-form {
      display: flex;
      gap: 14px;
    }
    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 100rem;
      ${AnimationSkeleton}
    }
    &-input {
      flex: 1;
      height: 44px;
      border-radius: 10px;
      ${AnimationSkeleton}
    }
    &-button {
      height: 44px;
      width: 84px;
      border-radius: 4px;
      ${AnimationSkeleton}
    }
  }
`;

const CommentSkeleton = () => {
  return (
    <StyledCommentSkeleton>
      <SkeletonTitle />
      <div className="skeleton-form">
        <div className="skeleton-avatar" />
        <div className="skeleton-input" />
        <div className="skeleton-button" />
      </div>
    </StyledCommentSkeleton>
  );
};

export default CommentSkeleton;
