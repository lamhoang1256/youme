import { MovieCard } from "modules/MovieCard";
import { IHomeSection } from "types/home";
import styles from "./homeSection.module.scss";

interface HomeListProps {
  homeSection: IHomeSection;
}

const HomeSection = ({ homeSection }: HomeListProps) => {
  return (
    <div className={styles.homeSection}>
      <h3 className={styles.homeSectionLabel}>{homeSection.homeSectionName}</h3>
      <div className={styles.homeSectionList}>
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
      </div>
    </div>
  );
};

export default HomeSection;
