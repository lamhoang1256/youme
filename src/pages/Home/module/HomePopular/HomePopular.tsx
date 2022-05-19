import Slider from "react-slick";
import { Popular } from "interfaces/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHome } from "apis/configAPI";
import SkeletonTitle from "components/Skeleton/SkeletonTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
                    src={popular.imageUrl}
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
