// import { AnimationSkeleton } from "assets/styles/_mixins";
import styled from "styled-components";

const StyledWatchPlayerSkeleton = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: var(--bg-skeleton);
  border-radius: 4px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
  }
`;

const WatchPlayerSkeleton = () => {
  return (
    <StyledWatchPlayerSkeleton>
      <img src={`${process.env.REACT_APP_PUBLIC}/images/spinner.gif`} alt="Spinner" />
    </StyledWatchPlayerSkeleton>
  );
};

export default WatchPlayerSkeleton;
