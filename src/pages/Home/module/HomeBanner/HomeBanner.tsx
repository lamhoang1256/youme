import Slider from "react-slick";
import { Banners } from "interfaces/api";
import { ButtonArrow } from "components/HomeBannerArrow/HomeBannerArrow";
import { Link } from "react-router-dom";
import { StyledBanner } from "./HomeBanner.style";

interface BannerProps {
  banners: Banners[];
}

const HomeBanner = ({ banners }: BannerProps) => {
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

  return (
    <div className="container">
      <StyledBanner>
        <Slider {...settings}>
          {banners.map((banner) => (
            <Link to={`/detail/${banner.jumpParam}?category=1`} key={banner.id}>
              <img className="banner" src={banner.imgUrl} alt="Banner" />
            </Link>
          ))}
        </Slider>
      </StyledBanner>
    </div>
  );
};

export default HomeBanner;
