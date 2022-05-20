import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeaderBoard } from "interfaces/api";
import { getLeaderBoard } from "apis/configAPI";
import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HomeSideSkeleton from "../HomeSkeleton/HomeSideSkeleton";
import { StyledHomeSide } from "./homeSide.style";

const HomeSide = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [trendings, setTrendings] = useState<LeaderBoard[]>([]);

  const fetchTrendingSide = async () => {
    setLoading(true);
    try {
      const { data } = await getLeaderBoard();
      setTrendings(data.list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingSide();
  }, []);

  return (
    <StyledHomeSide>
      <h3>Top trending</h3>
      {loading && <HomeSideSkeleton />}
      {!loading && (
        <div className="side-list">
          {trendings.map((trending, index) => {
            const url = `detail/${trending.id}?cate=${trending.domainType}`;
            return (
              <div className="side-item" key={trending.id}>
                <Link to={url} className="side-thumb">
                  <LazyLoadImage
                    src={resizeImage(trending.cover, "130")}
                    alt="Trending"
                    effect="opacity"
                  />
                </Link>
                <div className="side-content">
                  <h4 className="side-rank">TOP {index + 1}</h4>
                  <Link to={url} className="side-name">
                    {trending.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </StyledHomeSide>
  );
};

export default HomeSide;
