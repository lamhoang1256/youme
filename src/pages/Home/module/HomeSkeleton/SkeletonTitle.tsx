import styled from "styled-components";
import { AnimationSkeleton } from "assets/styles/_mixins";

const StyledSkeletonTitle = styled.div`
  margin: 20px 0;
  height: 23px;
  width: 180px;
  border-radius: 3px;
  ${AnimationSkeleton}
`;

const SkeletonTitle = () => {
  return <StyledSkeletonTitle />;
};

export default SkeletonTitle;
