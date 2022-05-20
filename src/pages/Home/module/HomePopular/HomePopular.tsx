import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";
import { Popular } from "interfaces/api";
import { getHome } from "apis/configAPI";
import { resizeImage } from "constants/resizeImage";
import SkeletonTitle from "components/Skeleton/SkeletonTitle";
import { settingsPopular, StyledPopularCard, StyledPopularList } from "./homePopular.style";

const HomePopular = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [populars, setPopulars] = useState<Popular[]>([]);

  const fetchLeaderBoards = async () => {
    setLoading(true);
    try {
      const { data } = await getHome({ page: 0 });
      const popular = data.recommendItems.filter(
        (section: any) => section.homeSectionType === "BANNER",
      )[0];
      setPopulars(popular.recommendContentVOList);
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
        <Slider {...settingsPopular}>
          {Array(6)
            .fill(0)
            .map(() => (
              <StyledPopularCard key={uuidv4()}>
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
        <Slider {...settingsPopular}>
          {populars.map((popular) => {
            const IDandCate = popular.jumpAddress.split("?id=")[1];
            const id = Number(IDandCate.split("&type=")[0]);
            const category = Number(IDandCate.split("&type=")[1]);
            const url = `/detail/${id}?cate=${category}`;

            return (
              <StyledPopularCard key={popular.id}>
                <Link to={url}>
                  <LazyLoadImage
                    className="popular-thumb"
                    src={resizeImage(popular.imageUrl, "300px")}
                    alt="Top Movie"
                    effect="opacity"
                  />
                </Link>
                <Link to={url}>
                  <p className="popular-name">{popular.title}</p>
                </Link>
              </StyledPopularCard>
            );
          })}
        </Slider>
      )}
    </StyledPopularList>
  );
};

export default HomePopular;
