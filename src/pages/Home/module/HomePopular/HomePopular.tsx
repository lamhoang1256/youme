import Slider from "react-slick";
import { LeaderBoard } from "interfaces/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLeaderBoard } from "apis/configAPI";
import { StyledPopularCard, StyledPopularList } from "./homePopular.style";

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

const HomePopular = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [leaderBoards, setLeaderBoards] = useState<LeaderBoard[]>([]);

  const fetchLeaderBoards = async () => {
    setLoading(true);
    try {
      const { data } = await getLeaderBoard();
      setLeaderBoards(data.list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderBoards();
  }, []);

  return (
    <StyledPopularList>
      <h3>Popular Movie</h3>
      <Slider {...settings}>
        {leaderBoards?.map((leaderBoard) => {
          if (loading) {
            return (
              <StyledPopularCard>
                <div className="popular-skeleton">
                  <div key={leaderBoard.id}>
                    <div className="popular-skeleton-thumb" />
                    <div className="popular-skeleton-name" />
                  </div>
                </div>
              </StyledPopularCard>
            );
          }
          const url = `/detail/${leaderBoard.id}?cate=${leaderBoard.domainType}`;
          return (
            <div key={leaderBoard.id}>
              <StyledPopularCard>
                <Link to={url}>
                  <img className="popular-thumb" src={leaderBoard.cover} alt="Top Movie" />
                </Link>
                <Link to={url}>
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
