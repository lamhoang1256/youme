import Slider from "react-slick";
import { LeaderBoard } from "interfaces/api";
import { StyledPopularCard, StyledPopularList } from "./HomePopular.style";

interface HomePopularProps {
  leaderBoards: LeaderBoard[];
}

const HomePopular = ({ leaderBoards }: HomePopularProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <StyledPopularList>
      <h3>Popular Movie</h3>
      <Slider {...settings}>
        {leaderBoards.map((leaderBoard) => (
          <div>
            <StyledPopularCard key={leaderBoard.id}>
              <img src={leaderBoard.cover} alt="Top Movie" />
              <p>{leaderBoard.title}</p>
            </StyledPopularCard>
          </div>
        ))}
      </Slider>
    </StyledPopularList>
  );
};

export default HomePopular;
