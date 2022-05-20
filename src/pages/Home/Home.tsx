import { useEffect, useState } from "react";
import { IHomeSection } from "interfaces/api";
import { getHome } from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeList from "./module/HomeList/HomeList";
import HomeSide from "./module/HomeSide/HomeSide";
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

  useEffect(() => {
    fetchHomeSections();
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
