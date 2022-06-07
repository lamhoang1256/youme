import styled from "styled-components";
import HlsPlayer from "react-hls-player";
import { InView } from "react-intersection-observer";

const StyledCommunityPlayer = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  height: 0;
  .playerRef {
    position: absolute;
    inset: 0;
  }
  .playerMedia {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  @media screen and (max-width: 767.98px) {
    padding-top: 100%;
  }
`;

const CommunityPlayer = ({ mediaUrl }: { mediaUrl: string }) => {
  return (
    <StyledCommunityPlayer>
      <InView threshold={1}>
        {({ ref, inView }) => {
          return (
            <div ref={ref} className="playerRef">
              {/* @ts-ignore */}
              <HlsPlayer
                src={mediaUrl}
                autoPlay={inView}
                controls
                playsInline
                className="playerMedia"
              />
            </div>
          );
        }}
      </InView>
    </StyledCommunityPlayer>
  );
};

export default CommunityPlayer;
