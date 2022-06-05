import { getPreviewVideoMedia } from "apis/configAPI";
import HlsPlayer from "react-hls-player";
import InfiniteScroll from "react-infinite-scroll-component";
import { InView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import { StyledCommunity } from "./community.style";

const Community = () => {
  // const communityRef = useRef<RefObject<HTMLVideoElement>(null);
  const getKey = (index: number) => `discovery-${index || 0}`;
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => getPreviewVideoMedia(Number(key.split("-").slice(-1)[0])),
    {
      revalidateFirstPage: false,
    },
  );

  return (
    <StyledCommunity>
      <div className="container">
        <div className="community-list">
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((prev: any) => prev + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={<>Load</>}
          >
            {data
              ?.reduce((acc, current) => [...acc, ...current], [])
              ?.map((community: any) => {
                return (
                  <div className="community-card" key={community.id}>
                    <div className="community-header">
                      <img
                        src={community.upInfo.upImgUrl}
                        className="community-avatar"
                        alt="Avatar"
                      />
                      <div className="community-info">
                        <h3>{community.upInfo.upName}</h3>
                        <p>{community.introduction}</p>
                      </div>
                    </div>
                    <div className="community-player">
                      <InView threshold={0.5}>
                        {({ ref, inView }) => {
                          return (
                            <div ref={ref}>
                              {/* @ts-ignore */}
                              <HlsPlayer
                                src={community.mediaUrl.mediaUrl}
                                autoPlay={inView}
                                controls
                                playsInline
                                width="100%"
                                height="400px"
                              />
                            </div>
                          );
                        }}
                      </InView>
                    </div>
                  </div>
                );
              })}
          </InfiniteScroll>
        </div>
        {/* )} */}
      </div>
    </StyledCommunity>
  );
};

export default Community;
