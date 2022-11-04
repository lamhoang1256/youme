import { CustomLink } from "components/link";
import styles from "./watchCategory.module.scss";

interface WatchCategoryProps {
  categories: {
    id: number;
    name: string;
  }[];
}

const WatchCategory = ({ categories }: WatchCategoryProps) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CustomLink href={`/category/${category.id}`} key={category.id} className={styles.category}>
          {category.name}
        </CustomLink>
      ))}
    </div>
  );
};

export default WatchCategory;
