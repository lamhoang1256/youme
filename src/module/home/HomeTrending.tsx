import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLeaderBoard } from "apis/configAPI";
import { ILeaderBoard } from "types/home";
import Image from "components/image/Image";
import SkeletonTitle from "components/skeleton/SkeletonTitle";
import { v4 as uuidv4 } from "uuid";
import { TextClamp } from "assets/styles/_mixins";
import { settingsHomeTrending } from "./homeSettings";
import HomeTrendingSkeleton from "./HomeTrendingSkeleton";

const StyledTrendingList = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
  .label {
    margin-bottom: 14px;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    z-index: 40;
  }
  .slick-slider {
    margin-left: -10px;
  }
  .slick-dots {
    top: -40px;
    text-align: right;
    z-index: 10;
  }
  .slick-dots li.slick-active {
    width: 30px;
    background-color: var(--primary-color);
  }
  .slick-dots li {
    background-color: #8da0bc;
    border-radius: 100rem;
    width: 10px;
    height: 10px;
    margin: 0 6px;
    transition: all 0.35s linear;
  }
  .slick-dots li button::before {
    display: none;
  }
  @media screen and (max-width: 767.98px) {
    .slick-list {
      margin-bottom: 50px;
    }
    .slick-slide {
      margin: 0;
    }
    .slick-slider {
      margin-left: 0;
    }
    .slick-dots {
      top: unset;
      bottom: -25px;
      text-align: center;
    }
  }
`;

const StyledTrendingCard = styled.div`
  height: 100%;
  padding: 0 10px;
  .trending-thumbnail {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: auto 792 / 445;
    background-color: var(--bg-load-image);
  }
  .trending-title {
    padding-top: 10px;
    text-align: center;
    ${TextClamp.multilines(2)}
    color: var(--white);
    font-weight: 500;
  }
  @media screen and (max-width: 767.98px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    padding: 0;
  }
`;

const HomeTrending = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [trendings, setTrendings] = useState<ILeaderBoard[]>([]);
  useEffect(() => {
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
    fetchTrendingSide();
  }, []);

  return (
    <StyledTrendingList>
      {loading ? <SkeletonTitle /> : <h3 className="label">{t("Top Trending")}</h3>}
      {loading && (
        <Slider {...settingsHomeTrending}>
          {Array(6)
            .fill(0)
            .map(() => (
              <HomeTrendingSkeleton key={uuidv4()} />
            ))}
        </Slider>
      )}
      {!loading && (
        <Slider {...settingsHomeTrending}>
          {trendings.map((trending) => {
            const { id, domainType, cover, title } = trending;
            const url = `/detail/${id}?cate=${domainType}`;
            if (Number.isNaN(id) || Number.isNaN(domainType)) return null;
            return (
              <StyledTrendingCard key={id}>
                <Image
                  to={url}
                  className="trending-thumbnail"
                  url={cover}
                  width="300px"
                  alt="trending"
                />
                <Link to={url}>
                  <p className="trending-title">{title}</p>
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
