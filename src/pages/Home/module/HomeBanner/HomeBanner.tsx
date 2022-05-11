import Slider from "react-slick";
import { HomeSection } from "interfaces/api";
import { ButtonArrow } from "components/HomeBannerArrow/HomeBannerArrow";
import { StyledBanner, StyledSlider } from "./HomeBanner.style";

interface BannerProps {
  banners: HomeSection[];
}

const HomeBanner = ({ banners }: BannerProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <ButtonArrow onClick={undefined} style={undefined} className="">
        <img src="http://localhost:3000/images/arrow-left.png" alt="Prev" />
      </ButtonArrow>
    ),
    nextArrow: (
      <ButtonArrow onClick={undefined} style={undefined} className="">
        <img src="http://localhost:3000/images/arrow-right.png" alt="Next" />
      </ButtonArrow>
    ),
  };

  return (
    <StyledSlider className="container">
      <Slider {...settings}>
        {banners[0]?.recommendContentVOList.map((banner) => (
          <StyledBanner key={banner.id}>
            <img src={banner.imageUrl} alt="Banner" />
          </StyledBanner>
        ))}
      </Slider>
    </StyledSlider>
  );
};

export default HomeBanner;
