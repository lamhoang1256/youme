import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useSWRInfinite from "swr/infinite";
import { getHome } from "apis/configAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/loading/LoadingSpinner";
import SkeletonTitle from "components/skeleton/SkeletonTitle";
import { useEffect, useState } from "react";
import { IHomeSection } from "types/home";
import { useTranslation } from "react-i18next";
import HomeBanner from "module/home/HomeBanner";
import HomeTrending from "module/home/HomeTrending";
import HomeCardSkeleton from "module/home/HomeCardSkeleton";
import HomeList, { StyledHomeList } from "module/home/HomeList";
import { StyledHome } from "./home.style";

const Home = () => {
  const { t } = useTranslation();
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);
  const getKey = (index: number) => `page-${index || 1}`;
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key: string) => getHome({ page: Number(key.split("page-")[1]) }),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    if (!data) return;
    const newData = data?.reduce((prevCache: any, currentCache: any) => {
      const validSections = [...currentCache]?.filter(
        (section: any) => section.bannerProportion !== 1 && section.coverType === 1,
      );
      return [...prevCache, ...validSections];
    }, []);
    setHomeSections(newData);
  }, [data]);
  useEffect(() => {
    document.title = "Youme";
  }, []);

  return (
    <StyledHome>
      <HomeBanner />
      <div className="container">
        <HomeTrending />
        {!data && (
          <StyledHomeList>
            <SkeletonTitle />
            <div className="list">
              {Array(7)
                .fill(0)
                .map(() => (
                  <HomeCardSkeleton key={uuidv4()} />
                ))}
            </div>
          </StyledHomeList>
        )}
        {data && (
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((size) => size + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={<LoadingSpinner />}
            endMessage={
              <Link to="/explore">
                <button type="button" className="see-more">
                  {t("See More")}
                </button>
              </Link>
            }
          >
            {data && (
              <>
                {homeSections.map((homeSection) => (
                  <HomeList key={homeSection.homeSectionId} homeSection={homeSection} />
                ))}
              </>
            )}
          </InfiniteScroll>
        )}
      </div>
    </StyledHome>
  );
};

export default Home;
