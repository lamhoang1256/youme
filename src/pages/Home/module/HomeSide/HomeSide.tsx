import { getLeaderBoard } from "apis/configAPI";
import { LeaderBoard } from "interfaces/api";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      {loading && "Loading"}
      {!loading && (
        <div className="side-list">
          {trendings.map((trending, index) => (
            <div className="side-item" key={trending.id}>
              <div className="side-thumb">
                <LazyLoadImage src={trending.cover} alt="Trending" effect="opacity" />
              </div>
              <div className="side-content">
                <h4 className="side-rank">TOP {index + 1}</h4>
                <p className="side-name">{trending.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </StyledHomeSide>
  );
};

export default HomeSide;
