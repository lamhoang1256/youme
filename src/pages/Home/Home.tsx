import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useSWRInfinite from "swr/infinite";
import { getHome } from "apis/configAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import SkeletonTitle from "components/Skeleton/SkeletonTitle";
import { useEffect, useState } from "react";
import { IHomeSection } from "interfaces/home";
import { useTranslation } from "react-i18next";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeList from "./module/HomeList/HomeList";
import HomeSide from "./module/HomeSide/HomeSide";
import HomeCardSkeleton from "./module/HomeSkeleton/HomeCardSkeleton";
import { StyledHome, StyledWrapperLayout } from "./home.style";
import { StyledHomeList } from "./module/HomeList/homeList.style";

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
    const sectionMovies = data?.reduce((prevData: any, currentData: any) => {
      const suitableSections = [...currentData.data.recommendItems]?.filter(
        (section: any) => section.bannerProportion !== 1 && section.coverType === 1,
      );
      return [...prevData, ...suitableSections];
    }, []);
    setHomeSections(sectionMovies);
  }, [data]);

  return (
    <StyledHome>
      <HomeBanner />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular />
          {!data && (
            <StyledHomeList>
              <SkeletonTitle />
              <div className="home-list">
                {Array(12)
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
              hasMore={!error && data?.slice(-1)?.[0]?.data?.recommendItems?.length !== 0}
              loader={<LoadingSpinner />}
              endMessage={
                <Link to="/explore">
                  <button type="button" className="seemore">
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
        <div className="wrapper-side">
          <HomeSide />
        </div>
      </StyledWrapperLayout>
    </StyledHome>
  );
};

export default Home;
