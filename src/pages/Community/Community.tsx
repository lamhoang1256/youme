import { useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";
import { getPreviewVideoMedia } from "apis/configAPI";
import { ICommunity } from "types/community";
import LoadingSpinner from "components/loading/LoadingSpinner";
import Heading from "components/heading/Heading";
import CommunityPlayer from "module/community/CommunityPlayer";
import DetailDescription from "module/detail/DetailDescription";
import { StyledCommunity } from "./community.style";

const Community = () => {
  const { t } = useTranslation();
  const getKey = (index: number) => `community-${index || 0}`;
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => getPreviewVideoMedia(Number(key.split("community-").slice(-1)[0])),
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
        <div className="list">
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((prev: number) => prev + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={<LoadingSpinner />}
          >
            {data
              ?.reduce((prev, curr) => [...prev, ...curr], [])
              ?.map((community: ICommunity) => {
                const { id, refList, upInfo, introduction, likeCount, mediaInfoUrl } = community;
                const category = refList?.[0]?.category;
                const idMovie = refList?.[0]?.id;
                const url = `/detail/${idMovie}?cate=${category}`;
                return (
                  <div className="card" key={id}>
                    <div className="header">
                      <img src={upInfo?.upImgUrl} className="avatar" alt="avatar" />
                      <div className="overview">
                        <Heading>{upInfo?.upName}</Heading>
                        <DetailDescription rowLines={2} lineHeight={1.3}>
                          {introduction}
                        </DetailDescription>
                      </div>
                      <div className="actions">
                        <div className="action">
                          <div className="icon">
                            <img src="images/heart.svg" alt="heart" />
                          </div>
                          <span>{likeCount}</span>
                        </div>
                        <div className="action">
                          <Link to={url} className="icon">
                            <IonIcon name="open-outline" />
                          </Link>
                          <span>Open</span>
                        </div>
                      </div>
                    </div>
                    <CommunityPlayer mediaUrl={mediaInfoUrl.mediaUrl} />
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
