import { IHomeSection } from "interfaces/api";
import HomeList from "../HomeList/HomeList";
import { StyledHomeSection } from "./homeSection.style";

interface HomeSectionProps {
  homeSection: IHomeSection;
}

const HomeSection = ({ homeSection }: HomeSectionProps) => {
  // console.log(homeSection);
  return (
    <StyledHomeSection>
      <h3 className="home-title">{homeSection.homeSectionName}</h3>
      <HomeList homeSection={homeSection} />
    </StyledHomeSection>
  );
};

export default HomeSection;
