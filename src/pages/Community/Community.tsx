import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";
import { getPreviewVideoMedia } from "apis/configAPI";
import { ICommunity } from "types/community";
import LoadingSpinner from "components/loading/LoadingSpinner";
import CommunityCard from "module/community/CommunityCard";
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
              ?.reduce((prevCache, currentCache) => [...prevCache, ...currentCache], [])
              ?.map((community: ICommunity) => (
                <CommunityCard community={community} key={community.id} />
              ))}
          </InfiniteScroll>
        </div>
      </div>
    </StyledCommunity>
  );
};

export default Community;
