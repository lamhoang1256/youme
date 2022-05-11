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
        <img src="http://localhost:3000/images/arrow-back.svg" alt="Prev" />
      </ButtonArrow>
    ),
    nextArrow: (
      <ButtonArrow onClick={undefined} style={undefined} className="">
        <img src="http://localhost:3000/images/arrow-next.svg" alt="Next" />
      </ButtonArrow>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <StyledSlider>
        <Slider {...settings}>
          {banners[0]?.recommendContentVOList.map((banner) => (
            <StyledBanner key={banner.id}>
              <img src={banner.imageUrl} alt="Banner" />
            </StyledBanner>
          ))}
        </Slider>
      </StyledSlider>
    </div>
  );
};

export default HomeBanner;
