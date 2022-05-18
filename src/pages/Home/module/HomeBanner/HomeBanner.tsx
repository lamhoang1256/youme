import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banners } from "interfaces/api";
import { ButtonArrow } from "components/HomeBannerArrow/HomeBannerArrow";
import { getBanners } from "apis/configAPI";
import { StyledBanner } from "./homeBanner.style";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <ButtonArrow onClick={undefined} style={undefined} className="">
      <img src={`${process.env.REACT_APP_PUBLIC}/images/arrow-back.svg`} alt="Prev" />
    </ButtonArrow>
  ),
  nextArrow: (
    <ButtonArrow onClick={undefined} style={undefined} className="">
      <img src={`${process.env.REACT_APP_PUBLIC}/images/arrow-next.svg`} alt="Next" />
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
        <Slider {...settings}>
          {banners.map((banner) => {
            if (loading) {
              return <div className="banner-loading" />;
            }

            const category = banner.jumpType === "DRAMA" ? 1 : 0;
            return (
              <Link to={`/detail/${banner.jumpParam}?cate=${category}`} key={banner.id}>
                <img className="banner" src={banner.imgUrl} alt="Banner" />
              </Link>
            );
          })}
        </Slider>
      </StyledBanner>
    </div>
  );
};

export default HomeBanner;
