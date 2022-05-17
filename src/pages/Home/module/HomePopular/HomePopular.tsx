import Slider from "react-slick";
import { LeaderBoard } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledPopularCard, StyledPopularList } from "./homePopular.style";

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
        {leaderBoards?.map((leaderBoard) => {
          return (
            <div key={leaderBoard.id}>
              <StyledPopularCard>
                <Link to={`/detail/${leaderBoard.id}?cate=${leaderBoard.domainType}`}>
                  <img src={leaderBoard.cover} alt="Top Movie" />
                </Link>
                <Link to={`/detail/${leaderBoard.id}?cate=${leaderBoard.domainType}`}>
                  <p className="popular-name">{leaderBoard.title}</p>
                </Link>
              </StyledPopularCard>
            </div>
          );
        })}
      </Slider>
    </StyledPopularList>
  );
};

export default HomePopular;
