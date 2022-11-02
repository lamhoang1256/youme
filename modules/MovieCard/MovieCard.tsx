import { resizeImage } from "constants/global";
import { MovieTitle } from "modules/MovieTitle";
import Image from "next/image";
import Link from "next/link";
import { IMovieCard } from "types/components";
import styles from "./movieCard.module.scss";

const MovieCard = ({ id, domainType, title, coverVerticalUrl }: IMovieCard) => {
  const href = `/detail/${id}?cate=${domainType}`;
  return (
    <div className={styles.movieCard}>
      <Link href={href}>
        <a className={styles.movieCardMedia}>
          <Image
            alt={title}
            width={190}
            height={266}
            src={resizeImage(coverVerticalUrl, 190)}
            className={styles.movieCardPoster}
          />
          <picture>
            <img src="/icon-play.png" alt="play" className={styles.movieCardPlay} />
          </picture>
        </a>
      </Link>
      <MovieTitle href={href} className={styles.movieCardTitle}>
        {title}
      </MovieTitle>
    </div>
  );
};

export default MovieCard;
