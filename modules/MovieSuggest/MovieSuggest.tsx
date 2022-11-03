import { IconStar } from "components/icons";
import { CustomLink } from "components/link";
import Image from "next/image";
import { IMovieSuggest } from "types";
import styles from "./movieSuggest.module.scss";

interface MovieSuggestProps {
  listSuggest: IMovieSuggest[];
}

const MovieSuggest = ({ listSuggest }: MovieSuggestProps) => {
  return (
    <div className={styles.section}>
      <h3>You may like</h3>
      <div className={styles.list}>
        {listSuggest.map((suggest) => {
          const href = `/detail/${suggest?.id}?cate=${suggest?.category}`;
          return (
            <div className={styles.item} key={suggest.id}>
              <div className={styles.poster}>
                <CustomLink href={href}>
                  <Image
                    width={100}
                    height={140}
                    alt={suggest.name}
                    src={suggest.coverVerticalUrl}
                  />
                </CustomLink>
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <CustomLink className={styles.name} href={href}>
                    {suggest.name}
                  </CustomLink>
                  <div className={styles.categories}>
                    {suggest.tagList.slice(0, 2).map((cate) => (
                      <span key={cate.id}>{cate.name}</span>
                    ))}
                  </div>
                  <div className={styles.rating}>
                    <IconStar fill="#e8b647" width={16} height={16} /> {suggest.score} /10
                  </div>
                </div>
                <div className={styles.meta}>
                  <div>{suggest.areaList[0].name}</div>
                  <div>{suggest.year}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSuggest;
