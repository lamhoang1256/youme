import { useEffect, useState } from "react";
import { Banners, IHomeSection, LeaderBoard } from "interfaces/api";
import { getBanners, getHome, getLeaderBoard } from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
// import HomeSection from "./module/HomeSection/HomeSection";
import { StyledHome, StyledWrapperLayout } from "./home.style";
import HomeList from "./module/HomeList/HomeList";
import HomeActors from "./module/HomeActors/HomeActors";

const Home = () => {
  const [banners, setBanners] = useState<Banners[]>([]);
  const [leaderBoards, setLeaderBoards] = useState<LeaderBoard[]>([]);
  const [isLoadingSection, setIsLoadingSection] = useState<boolean>(true);
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);
  const [homeActors, setHomeActors] = useState<IHomeSection>(Object);
  console.log(homeActors);
  const fetchData = async () => {
    try {
      const { data } = await getBanners({ size: 10 });
      setBanners(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHomeSections = async () => {
    setIsLoadingSection(true);
    try {
      const { data } = await getHome({ page: 0 });
      const sectionActors = data.recommendItems.filter(
        (section: any) => section.bannerProportion === 1,
      )[0];
      const sectionMovies = data.recommendItems.filter(
        (section: any) => section.bannerProportion !== 1 && section.coverType === 1,
      );
      setHomeActors(sectionActors);
      setHomeSections(sectionMovies);
      setIsLoadingSection(false);
    } catch (error) {
      // console.log(error);
      setIsLoadingSection(false);
    }
  };

  const fetchLeaderBoard = async () => {
    try {
      const { data } = await getLeaderBoard();
      setLeaderBoards(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLeaderBoard();
    fetchHomeSections();
  }, []);

  return (
    <StyledHome>
      <HomeBanner banners={banners} />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular leaderBoards={leaderBoards} />
          {isLoadingSection && "Loading section"}
          {!isLoadingSection && (
            <>
              <HomeActors homeActors={homeActors} />
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
