import { useEffect, useState } from "react";
import { IHomeSection } from "interfaces/home";
import { getHome } from "apis/configAPI";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeList from "./module/HomeList/HomeList";
import HomeSide from "./module/HomeSide/HomeSide";
import { StyledHome, StyledWrapperLayout } from "./home.style";

const Home = () => {
  // const [loadingSections, setLoadingSections] = useState<boolean>(true);
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);

  const getKey = (indexPage: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    const prevPage = previousPageData?.data?.page || 0;
    return `page-${prevPage}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key: string) => getHome({ page: Number(key.split("page-")[1]) + 1 }),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    if (!data) return;
    const sectionMovies = data?.reduce(
      (prevExplore: any, currExplore: any) => [...prevExplore, ...currExplore.data.recommendItems],
      [],
    );
    setHomeSections(sectionMovies);
  }, [data]);

  return (
    <StyledHome>
      <HomeBanner />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular />
          {/* {loadingSections && (
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
          )} */}

          {/* {homeSections.map((homeSection) => (
                <HomeList key={homeSection.homeSectionId} homeSection={homeSection} />
              ))} */}
          {homeSections.length > 0 && (
            <InfiniteScroll
              dataLength={data?.length || 0}
              next={() => setSize((size) => size + 1)}
              hasMore={!error && data?.slice(-1)[0].data.recommendItems.length !== 0}
              loader={<LoadingSpinner />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {homeSections.map((homeSection) => (
                <HomeList key={homeSection.homeSectionId} homeSection={homeSection} />
              ))}
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

// category: 1
// contentType: "DRAMA"
// id: 15870
// imageUrl: "https://img.netpop.app/cover/20220415/1649993224652_1a1324cdda65685844de7ea9ee348a70ofU2TlwDOOuWtQ456jeGwRNkyp2.jpg"
// jumpAddress: "tiktik://jump/detail?id=15870&type=1"
// jumpType: ""
// needLogin: false
// resourceNum: 6
// resourceStatus: 2
// showMark: true
// title: "The Sound of Magic"
