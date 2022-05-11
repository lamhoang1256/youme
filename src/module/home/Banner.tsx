import styled from "styled-components";
import Slider from "react-slick";
import { HomeSection } from "interfaces/api";
import { ButtonArrow } from "components/button/ButtonArrowBanner";

const StyledSlider = styled.div`
  margin-top: 40px !important;
  height: 250px;
  .slick-slider {
    height: 100%;
  }
  .slick-slide {
    margin: 0 26px;
  }
  .slick-list {
    height: 100%;
    overflow-x: hidden;
  }
  .slick-slide > div > div {
    outline: none;
    border: none;
  }
  .slick-prev,
  .slick-next {
    display: block;
    background: var(--primary-color);
    width: 40px;
    height: 40px;
    z-index: 100;
    border-radius: 100rem;
    &::before {
      display: none;
    }
  }
`;

const StyledBanner = styled.div`
  position: relative;
  height: 250px;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

interface BannerProps {
  banners: HomeSection[];
}

const Banner = ({ banners }: BannerProps) => {
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

export default Banner;
