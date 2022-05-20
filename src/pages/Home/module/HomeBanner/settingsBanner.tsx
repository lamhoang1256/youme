import { SliderArrow } from "components/SliderArrow/SliderArrow";

const URL_PUBLIC_IMG = `${process.env.REACT_APP_PUBLIC}/images`;
export const settingsBanner = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <SliderArrow onClick={undefined} style={undefined} className="">
      <img src={`${URL_PUBLIC_IMG}/arrow-back.svg`} alt="Prev" />
    </SliderArrow>
  ),
  nextArrow: (
    <SliderArrow onClick={undefined} style={undefined} className="">
      <img src={`${URL_PUBLIC_IMG}/arrow-next.svg`} alt="Next" />
    </SliderArrow>
  ),
};
