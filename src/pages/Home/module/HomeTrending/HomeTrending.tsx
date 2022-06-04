import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ILeaderBoard } from "interfaces/home";
import { getLeaderBoard } from "apis/configAPI";
import { resizeImage } from "constants/resizeImage";
import SkeletonTitle from "components/Skeleton/SkeletonTitle";
import { StyledTrendingCard, StyledTrendingList } from "./homeTrending.style";
import { settingsTrending } from "./settingsTrending";

const HomeTrending = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [trendings, setTrendings] = useState<ILeaderBoard[]>([]);

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
    <StyledTrendingList>
      {loading ? <SkeletonTitle /> : <h3>{t("Top Trending")}</h3>}
      {loading && (
        <Slider {...settingsTrending}>
          {Array(6)
            .fill(0)
            .map(() => (
              <StyledTrendingCard key={uuidv4()}>
                <div className="trending-skeleton">
                  <div>
                    <div className="trending-skeleton-thumb" />
                    <div className="trending-skeleton-name" />
                  </div>
                </div>
              </StyledTrendingCard>
            ))}
        </Slider>
      )}
      {!loading && (
        <Slider {...settingsTrending}>
          {trendings.map((trending) => {
            const { id } = trending;
            const category = trending.domainType;
            const url = `/detail/${id}?cate=${category}`;
            if (Number.isNaN(id) || Number.isNaN(category)) return null;
            return (
              <StyledTrendingCard key={trending.id}>
                <Link to={url}>
                  <LazyLoadImage
                    className="trending-thumb"
                    src={resizeImage(trending.cover, "300px")}
                    alt="Top Movie"
                    effect="opacity"
                  />
                </Link>
                <Link to={url}>
                  <p className="trending-name">{trending.title}</p>
                </Link>
              </StyledTrendingCard>
            );
          })}
        </Slider>
      )}
    </StyledTrendingList>
  );
};

export default HomeTrending;
