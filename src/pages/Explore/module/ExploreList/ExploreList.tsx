import styled from "styled-components";
import { IExploreCard } from "interfaces/explore";
import ExploreCard from "../ExploreCard/ExploreCard";

interface ExploreListProps {
  exploreList: IExploreCard[];
}

const StyledExploreList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  grid-gap: 15px;
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ExploreList = ({ exploreList }: ExploreListProps) => {
  return (
    <StyledExploreList>
      {exploreList.length > 0 &&
        exploreList.map((explore) => <ExploreCard explore={explore} key={explore.id} />)}
    </StyledExploreList>
  );
};

export default ExploreList;
