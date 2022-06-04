import { IHomeSection } from "interfaces/home";
import HomeCard from "../HomeCard/HomeCard";
import { StyledHomeList } from "./homeList.style";

interface HomeListProps {
  homeSection: IHomeSection;
}

const HomeList = ({ homeSection }: HomeListProps) => {
  return (
    <StyledHomeList>
      <h3 className="home-title">{homeSection.homeSectionName}</h3>
      <div className="home-list">
        {homeSection.recommendContentVOList.slice(0, 14).map((movie) => {
          return <HomeCard key={movie.id} movie={movie} />;
        })}
      </div>
    </StyledHomeList>
  );
};

export default HomeList;
