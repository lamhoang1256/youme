import styled from "styled-components";
import { IHomeSection } from "interfaces/home";
import MovieCard from "components/movie/MovieCard";

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
        {homeSection.recommendContentVOList.slice(0, 14).map((card) => {
          const { jumpAddress, imageUrl, title } = card;
          const idAndCate = jumpAddress?.split("?id=")[1];
          const id = idAndCate?.split("&type=")[0];
          const category = Number(idAndCate?.split("&type=")[1]);
          if (Number.isNaN(category)) return null;
          const movie = {
            coverVerticalUrl: imageUrl,
            domainType: category,
            id,
            name: title,
          };
          return <MovieCard movie={movie} key={card.id} />;
        })}
      </div>
    </StyledHomeList>
  );
};

export default HomeList;
