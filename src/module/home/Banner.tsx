import styled from "styled-components";
import Slider from "react-slick";
import { HomeSection } from "interfaces/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  overflow: hidden;
`;

const StyledBanner = styled.div`
  position: relative;
  height: 500px;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overplay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515);
  }
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2 {
      color: var(--white);
      font-size: 7rem;
    }
    button {
      padding: 14px 40px;
      border-radius: 30px;
      color: var(--white);
      background-color: var(--primary-color);
    }
  }
`;

interface BannerProps {
  banners: HomeSection[];
}

const Banner = ({ banners }: BannerProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider>
      <Slider {...settings}>
        {banners[0]?.recommendContentVOList.map((banner) => (
          <StyledBanner key={banner.id}>
            <img src={banner.imageUrl} alt="Banner" />
            <div className="overplay" />
            <div className="content">
              <h2>{banner.title}</h2>
              <button type="button">Watch now</button>
            </div>
          </StyledBanner>
        ))}
      </Slider>
    </StyledSlider>
  );
};

export default Banner;
