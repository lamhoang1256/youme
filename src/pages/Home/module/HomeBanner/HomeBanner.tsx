import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banners } from "interfaces/api";
import { ButtonArrow } from "components/HomeBannerArrow/HomeBannerArrow";
import { getBanners } from "apis/configAPI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledBanner } from "./homeBanner.style";

const URL_PUBLIC_IMG = `${process.env.REACT_APP_PUBLIC}/images`;
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <ButtonArrow onClick={undefined} style={undefined} className="">
      <img src={`${URL_PUBLIC_IMG}/arrow-back.svg`} alt="Prev" />
    </ButtonArrow>
  ),
  nextArrow: (
    <ButtonArrow onClick={undefined} style={undefined} className="">
      <img src={`${URL_PUBLIC_IMG}/arrow-next.svg`} alt="Next" />
    </ButtonArrow>
  ),
};

const HomeBanner = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [banners, setBanners] = useState<Banners[]>([]);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const { data } = await getBanners({ size: 10 });
      setBanners(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="container">
      <StyledBanner>
        {loading && <div className="banner-loading" />}

        {!loading && (
          <Slider {...settings}>
            {banners.map((banner) => {
              const category = banner.jumpType === "DRAMA" ? 1 : 0;
              const url = `/detail/${banner.jumpParam}?cate=${category}`;
              return (
                <Link to={url} key={banner.id}>
                  <LazyLoadImage
                    className="banner"
                    src={`${banner.imgUrl}?imageMogr2/format/webp/format/webp`}
                    alt="Banner"
                    effect="opacity"
                  />
                </Link>
              );
            })}
          </Slider>
        )}
      </StyledBanner>
    </div>
  );
};

export default HomeBanner;
