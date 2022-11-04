import { MovieCard } from "modules/MovieCard";
import { MovieList } from "modules/MovieList";
import { IHomeSection } from "types/home";
import styles from "./homeSection.module.scss";

interface HomeListProps {
  homeSection: IHomeSection;
}

const HomeSection = ({ homeSection }: HomeListProps) => {
  return (
    <MovieList heading={homeSection.homeSectionName}>
      {homeSection.recommendContentVOList.slice(0, 12).map((section) => {
        const arrayIdAndCate = section.jumpAddress?.split("?id=")[1];
        const category = Number(arrayIdAndCate?.split("&type=")[1]);
        if (Number.isNaN(category)) return null;
        return (
          <MovieCard
            key={arrayIdAndCate?.split("&type=")[0]}
            id={arrayIdAndCate?.split("&type=")[0]}
            title={section.title}
            coverVerticalUrl={section.imageUrl}
            domainType={category}
          />
        );
      })}
    </MovieList>
  );
};

export default HomeSection;
