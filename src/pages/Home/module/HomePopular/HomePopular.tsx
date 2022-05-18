import Slider from "react-slick";
import { LeaderBoard } from "interfaces/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLeaderBoard } from "apis/configAPI";
import { StyledPopularCard, StyledPopularList } from "./homePopular.style";
import SkeletonTitle from "../HomeSkeleton/SkeletonTitle";

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
      {loading ? <SkeletonTitle /> : <h3>Popular Movie</h3>}

      {loading && (
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <StyledPopularCard key={card}>
              <div className="popular-skeleton">
                <div>
                  <div className="popular-skeleton-thumb" />
                  <div className="popular-skeleton-name" />
                </div>
              </div>
            </StyledPopularCard>
          ))}
        </Slider>
      )}

      {!loading && (
        <Slider {...settings}>
          {leaderBoards.map((leaderBoard) => {
            const url = `/detail/${leaderBoard.id}?cate=${leaderBoard.domainType}`;
            return (
              <StyledPopularCard key={leaderBoard.id}>
                <Link to={url}>
                  <img className="popular-thumb" src={leaderBoard.cover} alt="Top Movie" />
                </Link>
                <Link to={url}>
                  <p className="popular-name">{leaderBoard.title}</p>
                </Link>
              </StyledPopularCard>
            );
          })}
          {/* {leaderBoards?.map((leaderBoard) => {
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
          )
        }} */}
        </Slider>
      )}
    </StyledPopularList>
  );
};

export default HomePopular;
