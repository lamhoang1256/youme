import styled from "styled-components";
import { IHomeSection } from "interfaces/home";
import HomeCard from "./HomeCard";

interface HomeListProps {
  homeSection: IHomeSection;
}

export const StyledHomeList = styled.div`
  margin: 30px 0;
  .label {
    margin: 20px 0;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
    grid-gap: 20px 15px;
    @media screen and (max-width: 640px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

const HomeList = ({ homeSection }: HomeListProps) => {
  return (
    <StyledHomeList>
      <h3 className="label">{homeSection.homeSectionName}</h3>
      <div className="list">
        {homeSection.recommendContentVOList.slice(0, 14).map((movie) => (
          <HomeCard key={movie.id} movie={movie} />
        ))}
      </div>
    </StyledHomeList>
  );
};

export default HomeList;
