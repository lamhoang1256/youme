import { useEffect, useState } from "react";
import { IHomeSection } from "interfaces/api";
import { getHome } from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeList from "./module/HomeList/HomeList";
import HomeCardSkeleton from "./module/HomeCard/HomeCardSkeleton";
import SkeletonTitle from "../../components/Skeleton/SkeletonTitle";
import { StyledHome, StyledWrapperLayout } from "./home.style";
import { StyledHomeList } from "./module/HomeList/homeList.style";

const Home = () => {
  const [loadingSections, setLoadingSections] = useState<boolean>(true);
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);

  const fetchHomeSections = async () => {
    setLoadingSections(true);
    try {
      const { data } = await getHome({ page: 0 });
      const sectionMovies = data.recommendItems.filter(
        (section: any) => section.bannerProportion !== 1 && section.coverType === 1,
      );
      setHomeSections(sectionMovies);
      setLoadingSections(false);
    } catch (error) {
      setLoadingSections(false);
    }
  };

  const fetchTrendingSide = async () => {
    try {
      const { data } = await getHome({ page: 0 });
      const trendingData = data.recommendItems.filter(
        (section: any) => section.homeSectionType === "BANNER",
      )[0];
      console.log("banner", trendingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHomeSections();
    fetchTrendingSide();
  }, []);

  return (
    <StyledHome>
      <HomeBanner />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular />

          {loadingSections && (
            <StyledHomeList>
              <SkeletonTitle />
              <div className="home-list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
                  <HomeCardSkeleton key={skeleton} />
                ))}
              </div>
            </StyledHomeList>
          )}
          {!loadingSections && (
            <>
              {homeSections.map((homeSection) => (
                <HomeList key={homeSection.homeSectionId} homeSection={homeSection} />
              ))}
            </>
          )}
        </div>
        <div className="wrapper-side">Side</div>
      </StyledWrapperLayout>
    </StyledHome>
  );
};

export default Home;
