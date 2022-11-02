import axios from "axios";
import { server } from "configs/server";
import { HomeSection } from "modules/HomeSection";
import { HomeTrending } from "modules/HomeTrending";
import { GetServerSidePropsContext } from "next";
import { IHomeSection, ILeaderBoard } from "types";

interface HomePageProps {
  trendings: ILeaderBoard[];
  sections: IHomeSection[];
}

const HomePage = ({ trendings, sections }: HomePageProps) => {
  return (
    <div className="container">
      <HomeTrending trendings={trendings} />
      {sections.map((homeSection: any) => (
        <HomeSection key={homeSection.homeSectionId} homeSection={homeSection} />
      ))}
    </div>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { trendings, sections } = (await axios.get(`${server}/api/home`, { params: query })).data
    .data;
  return {
    props: {
      trendings,
      sections,
    },
  };
};

export default HomePage;
