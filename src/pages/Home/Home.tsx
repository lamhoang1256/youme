import { useEffect, useState } from "react";
import { Banners, LeaderBoard } from "interfaces/api";
import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import HomeBanner from "./module/HomeBanner/HomeBanner";
import HomePopular from "./module/HomePopular/HomePopular";
import { StyledHome, StyledWrapperLayout } from "./home.style";

const Home = () => {
  const [banners, setBanners] = useState<Banners[]>([]);
  const [leaderBoards, setLeaderBoards] = useState<LeaderBoard[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axiosClient.get(configAPI.getBanners(10));
      setBanners(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLeaderBoard = async () => {
    try {
      const { data } = await axiosClient.get(configAPI.getLeaderBoard);
      setLeaderBoards(data.data.list);
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
