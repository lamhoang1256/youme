import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import { useEffect, useState } from "react";
import { HomeSection } from "interfaces/api";
import styled from "styled-components";
import Banner from "module/home/Banner";

const StyledHome = styled.div``;

const Home = () => {
  const [banners, setBanners] = useState<HomeSection[]>([]);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(configAPI.getHome(0));
      console.log(response.data.data.recommendItems);
      setBanners(response.data.data.recommendItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledHome>
      <Banner banners={banners} />
    </StyledHome>
  );
};

export default Home;
