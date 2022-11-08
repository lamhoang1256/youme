import axios from "axios";
import { server } from "configs/server";
import { LayoutHome } from "layouts/LayoutHome";
import { HomeSection } from "modules/HomeSection";
import { HomeTrending } from "modules/HomeTrending";
import { GetServerSidePropsContext } from "next";
import { IHomeSection, ILeaderBoard } from "types";

interface HomePageProps {
  trendings: ILeaderBoard[];
  homeSections: IHomeSection[];
}

const HomePage = ({ trendings, homeSections }: HomePageProps) => {
  return (
    <LayoutHome>
      <div className="container">
        <HomeTrending trendings={trendings} />
        {homeSections.map((homeSection: any) => (
          <HomeSection key={homeSection.homeSectionId} homeSection={homeSection} />
        ))}
      </div>
    </LayoutHome>
  );
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { trendings, homeSections } = (await axios.get(`${server}/api/home`, { params: query }))
    .data.data;
  return {
    props: {
      trendings,
      homeSections,
    },
  };
};

export default HomePage;
