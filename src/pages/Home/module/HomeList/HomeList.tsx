import { IHomeSection } from "interfaces/api";
import Slider from "react-slick";
import HomeCard from "../HomeCard/HomeCard";
import { StyledHomeList } from "./homeList.style";

interface HomeListProps {
  homeSection: IHomeSection;
}

const HomeList = ({ homeSection }: HomeListProps) => {
  // console.log(homeSection.recommendContentVOList.slice(0, 5));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <StyledHomeList>
      <Slider {...settings}>
        {homeSection.recommendContentVOList.map((movie) => (
          <HomeCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </StyledHomeList>
  );
};

export default HomeList;
