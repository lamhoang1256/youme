import Slider from "react-slick";
import { LeaderBoard } from "interfaces/api";
import { StyledPopularCard, StyledPopularList } from "./HomePopular.style";

interface HomePopularProps {
  leaderBoards: LeaderBoard[];
}

const HomePopular = ({ leaderBoards }: HomePopularProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledPopularList>
      <h3>Popular Movie</h3>
      <Slider {...settings}>
        {leaderBoards.map((leaderBoard) => (
          <div key={leaderBoard.id}>
            <StyledPopularCard>
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
