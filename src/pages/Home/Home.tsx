import { useEffect, useState } from "react";
import { Banners, LeaderBoard } from "interfaces/api";
import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import { StyledHome, StyledWrapperLayout } from "./Home.style";

const Home = () => {
  const [banners, setBanners] = useState<Banners[]>([]);
  const [leaderBoards, setLeaderBoards] = useState<LeaderBoard[]>([]);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(configAPI.getBanners(10));
      setBanners(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLeaderBoard = async () => {
    try {
      const response = await axiosClient.get(
        "https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchLeaderboard",
      );
      // /cms/web/pc/search/searchLeaderboard"
      setLeaderBoards(response.data.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLeaderBoard();
  }, []);

  return (
    <StyledHome>
      <HomeBanner banners={banners} />
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          <HomePopular leaderBoards={leaderBoards} />
        </div>
        <div className="wrapper-side">Side</div>
      </StyledWrapperLayout>
    </StyledHome>
  );
};

export default Home;
