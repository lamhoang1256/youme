import Slider from "react-slick";
import { IHomeSection } from "interfaces/api";
import { ButtonArrow } from "components/HomeBannerArrow/HomeBannerArrow";
import { StyledHomeActors } from "./homeActors.style";

interface HomeActorsProps {
  homeActors: IHomeSection;
}

const HomeActors = ({ homeActors }: HomeActorsProps) => {
  console.log(homeActors);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
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
    <StyledHomeActors>
      <h3 className="actor-title">{homeActors.homeSectionName}</h3>
      <Slider {...settings}>
        {homeActors.recommendContentVOList.map((actor) => (
          <img src={actor.imageUrl} className="actor-avatar" alt="Actor" />
        ))}
      </Slider>
    </StyledHomeActors>
  );
};

export default HomeActors;
