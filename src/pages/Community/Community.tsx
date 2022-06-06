import { useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import HlsPlayer from "react-hls-player";
import InfiniteScroll from "react-infinite-scroll-component";
import { InView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { getPreviewVideoMedia } from "apis/configAPI";
import { PUBLIC_IMAGE } from "constants/path";
import { ICommunity } from "interfaces/community";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import { StyledCommunity } from "./community.style";

const Community = () => {
  const { t } = useTranslation();
  const getKey = (index: number) => `discovery-${index || 0}`;
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => getPreviewVideoMedia(Number(key.split("-").slice(-1)[0])),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    document.title = `Youme - ${t("Community")}`;
  }, []);

  return (
    <StyledCommunity>
      <div className="container">
        <div className="community-list">
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((prev: number) => prev + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={<LoadingSpinner />}
          >
            {data
              ?.reduce((acc, current) => [...acc, ...current], [])
              ?.map((community: ICommunity) => {
                const { id, refList, upInfo, introduction, likeCount, mediaInfoUrl } = community;
                const category = refList?.[0]?.category;
                const idMovie = refList?.[0]?.id;
                return (
                  <div className="community-card" key={id}>
                    <div className="community-header">
                      <img src={upInfo?.upImgUrl} className="community-avatar" alt="Avatar" />
                      <div className="community-info">
                        <h3>{upInfo?.upName}</h3>
                        <p className="community-introduction">{introduction}</p>
                      </div>
                      <div className="community-actions">
                        <div className="community-action">
                          <div className="community-icon">
                            <img src={`${PUBLIC_IMAGE}/heart.svg`} alt="heart" />
                          </div>
                          <span>{likeCount}</span>
                        </div>
                        <div className="community-action">
                          <Link
                            to={`/detail/${idMovie}?cate=${category}`}
                            className="community-icon"
                          >
                            <IonIcon name="open-outline" />
                          </Link>
                          <span>Open</span>
                        </div>
                      </div>
                    </div>
                    <div className="community-playerBox">
                      <InView threshold={1}>
                        {({ ref, inView }) => {
                          return (
                            <div ref={ref} className="community-playerRef">
                              {/* @ts-ignore */}
                              <HlsPlayer
                                src={mediaInfoUrl.mediaUrl}
                                autoPlay={inView}
                                controls
                                playsInline
                                className="community-playerMedia"
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
      </div>
    </StyledCommunity>
  );
};

export default Community;
