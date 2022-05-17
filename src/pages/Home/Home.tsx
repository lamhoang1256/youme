import { useEffect, useState } from "react";
import { Banners, IHomeSection, LeaderBoard } from "interfaces/api";
import { getBanners, getHome, getLeaderBoard } from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import HomeSection from "./module/HomeSection/HomeSection";
import { StyledHome, StyledWrapperLayout } from "./home.style";

const Home = () => {
  const [banners, setBanners] = useState<Banners[]>([]);
  const [leaderBoards, setLeaderBoards] = useState<LeaderBoard[]>([]);
  const [homeSections, setHomeSections] = useState<IHomeSection[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await getBanners({ size: 10 });
      setBanners(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHomeSections = async () => {
    try {
      const { data } = await getHome({ page: 0 });
      console.log(data);
      setHomeSections(data.recommendItems);
    } catch (error) {
      console.log(error);
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
          {homeSections.map((homeSection) => (
            <HomeSection key={homeSection.homeSectionId} homeSection={homeSection} />
          ))}
        </div>
        <div className="wrapper-side">Side</div>
      </StyledWrapperLayout>
    </StyledHome>
  );
};

export default Home;
