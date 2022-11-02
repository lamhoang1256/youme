import axios from "axios";
import { server } from "configs/server";
import { HomeSection } from "modules/HomeSection";
import { GetServerSidePropsContext } from "next";

interface HomePageProps {
  data: any;
}

const HomePage = ({ data }: HomePageProps) => {
  console.log("data: ", data);
  return (
    <div className="container">
      {data.map((homeSection: any) => (
        <HomeSection key={homeSection.homeSectionId} homeSection={homeSection} />
      ))}
    </div>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { data } = (await axios.get(`${server}/api/home`, { params: query })).data;
  return {
    props: {
      data,
    },
  };
};

export default HomePage;
