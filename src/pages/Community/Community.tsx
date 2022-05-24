import { InView } from "react-intersection-observer";
import { getPreviewVideoMedia } from "apis/configAPI";
import HlsPlayer from "react-hls-player";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { StyledCommunity } from "./community.style";

const Community = () => {
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
                        {({ ref, inView }) => (
                          <div ref={ref}>
                            <HlsPlayer
                              src={community.mediaUrl.mediaUrl}
                              autoPlay={inView}
                              controls
                              width="100%"
                              height="400px"
                            />
                          </div>
                        )}
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

/* <InfiniteScroll
      dataLength={10}
      next={() => console.log("load")}
      hasMore
      loader={<h3>Loading...</h3>}
    >
      <div className="community-card">
        <div className="community-header">
          <img
            src="https://img.rr.tv/ugc/20181201/o_1543631301029.jpg"
            className="community-avatar"
            alt="Avatar"
          />
          <div className="community-info">
            <h3>Adair Godwin</h3>
            <p>
              introduction:aving Private Ryan (7/7) Movie CLIP - Capt. Milles Last Stand
              (1998) HD
            </p>
          </div>
        </div>
        <div className="community-player">
          <InView threshold={0.5}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <HlsPlayer
                  src="https://ali-cdn-play.loklok.tv/3719b07ba82749f0b520404a4603cc5d/63f7564903314bcb851e56e689953d3e-24b476c81d4da0554a3194be60a2d281-sd.m3u8?auth_key=1653363001-a083e6626d894f44b1efa87eda59e98a-0-76e54ae9e68e506326b27a0eef3f8dd2"
                  autoPlay={inView}
                  controls
                  width="100%"
                  height="auto"
                  playerRef={playerRef}
                />
              </div>
            )}
          </InView>
        </div>
      </div>
      <div className="community-card">
        <div className="community-header">
          <img
            src="https://img.rr.tv/ugc/20181201/o_1543631301029.jpg"
            className="community-avatar"
            alt="Avatar"
          />
          <div className="community-info">
            <h3>Adair Godwin</h3>
            <p>
              introduction:aving Private Ryan (7/7) Movie CLIP - Capt. Milles Last Stand
              (1998) HD
            </p>
          </div>
        </div>
        <div className="community-player">
          <InView threshold={0.5}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <HlsPlayer
                  src="https://ali-cdn-play.loklok.tv/3719b07ba82749f0b520404a4603cc5d/63f7564903314bcb851e56e689953d3e-24b476c81d4da0554a3194be60a2d281-sd.m3u8?auth_key=1653363001-a083e6626d894f44b1efa87eda59e98a-0-76e54ae9e68e506326b27a0eef3f8dd2"
                  autoPlay={inView}
                  controls
                  width="100%"
                  height="auto"
                  playerRef={playerRef}
                />
              </div>
            )}
          </InView>
        </div>
      </div>
      <div className="community-card">
        <div className="community-header">
          <img
            src="https://img.rr.tv/ugc/20181201/o_1543631301029.jpg"
            className="community-avatar"
            alt="Avatar"
          />
          <div className="community-info">
            <h3>Adair Godwin</h3>
            <p>
              introduction:aving Private Ryan (7/7) Movie CLIP - Capt. Milles Last Stand
              (1998) HD
            </p>
          </div>
        </div>
        <div className="community-player">
          <InView threshold={0.5}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <HlsPlayer
                  src="https://ali-cdn-play.loklok.tv/3719b07ba82749f0b520404a4603cc5d/63f7564903314bcb851e56e689953d3e-24b476c81d4da0554a3194be60a2d281-sd.m3u8?auth_key=1653363001-a083e6626d894f44b1efa87eda59e98a-0-76e54ae9e68e506326b27a0eef3f8dd2"
                  autoPlay={inView}
                  controls
                  width="100%"
                  height="auto"
                  playerRef={playerRef}
                />
              </div>
            )}
          </InView>
        </div>
      </div>
    </InfiniteScroll> */
