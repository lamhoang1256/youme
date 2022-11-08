import { IconStar } from "components/icons";
import { CustomLink } from "components/link";
import { PATH } from "constants/path";
import { Cast } from "modules/Cast";
import { CastList } from "modules/CastList";
import Image from "next/image";
import Link from "next/link";
import { IMovieDetails } from "types";
import styles from "./movieDetails.module.scss";

interface MovieDetailsProps {
  details: IMovieDetails;
}

const MovieDetails = ({ details }: MovieDetailsProps) => {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.poster}>
          <Image width={220} height={310} alt={details.name} src={details.coverVerticalUrl} />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3>{details.name}</h3>
            <div className={styles.rating}>
              <IconStar fill="#e8b647" /> {details.score}
            </div>
          </div>
          <div className={styles.overview}>{details.introduction}</div>
          <div className={styles.categories}>
            <h4>Categories: </h4>
            {details.tagList.map((category) => (
              <CustomLink
                href={`/category/${category.id}`}
                key={category.id}
                className={styles.category}
              >
                {category.name}
              </CustomLink>
            ))}
          </div>
          <div>
            <CustomLink href={`${PATH.watch}/${details.category}/${details.id}`}>
              <button type="button" className={styles.watchNow}>
                Watch Now
              </button>
            </CustomLink>
          </div>
        </div>
      </div>
      {details.starList.length > 0 && <CastList starList={details.starList} />}
      <div className={styles.description}>{details.introduction}</div>
      <div className={styles.thumbnail}>
        <Image height={400} width={750} alt={details.name} src={details.coverHorizontalUrl} />
      </div>
    </>
  );
};

export default MovieDetails;
