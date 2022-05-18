import { useEffect, useState } from "react";
import { IHomeSection } from "interfaces/api";
import { getHome } from "apis/configAPI";
import { StyledHome, StyledWrapperLayout } from "./home.style";
import { StyledHomeList } from "./module/HomeList/homeList.style";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeList from "./module/HomeList/HomeList";
import SkeletonCard from "./module/HomeSkeleton/SkeletonCard";
import SkeletonTitle from "./module/HomeSkeleton/SkeletonTitle";

const Home = () => {
  // const [banners, setBanners] = useState<Banners[]>([]);
  const [loadingSection, setLoadingSection] = useState<boolean>(true);
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);

  // const fetchBanners = async () => {
  //   try {
  //     const { data } = await getBanners({ size: 10 });
  //     setBanners(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchHomeSections = async () => {
    setLoadingSection(true);
    try {
      const { data } = await getHome({ page: 0 });
      const sectionMovies = data.recommendItems.filter(
        (section: any) => section.bannerProportion !== 1 && section.coverType === 1,
      );
      setHomeSections(sectionMovies);
      setLoadingSection(false);
    } catch (error) {
      setLoadingSection(false);
    }
  };

  useEffect(() => {
    fetchHomeSections();
  }, []);

  return (
    <StyledHome>
      <HomeBanner />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular />

          {loadingSection && (
            <StyledHomeList>
              <SkeletonTitle />
              <div className="home-list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
                  <SkeletonCard key={skeleton} />
                ))}
              </div>
            </StyledHomeList>
          )}

          {!loadingSection && (
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
