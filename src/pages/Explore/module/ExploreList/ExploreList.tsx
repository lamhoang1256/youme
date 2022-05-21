import { IExploreCard } from "pages/Explore/Explore";
import styled from "styled-components";
import ExploreCard from "../ExploreCard/ExploreCard";

const StyledExploreList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  grid-gap: 15px;
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

interface ExploreListProps {
  exploreList: IExploreCard[];
}

const ExploreList = ({ exploreList }: ExploreListProps) => {
  console.log(exploreList);
  return (
    <StyledExploreList>
      {exploreList.length > 0 && exploreList.map((explore) => <ExploreCard explore={explore} />)}
    </StyledExploreList>
  );
};

export default ExploreList;
