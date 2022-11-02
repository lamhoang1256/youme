import Link from "next/link";
import classNames from "utils/classNames";
import styles from "./movieTitle.module.scss";
import { AnchorHTMLAttributes } from "react";

interface MovieTitleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

const MovieTitle = ({ href, title, className, ...props }: MovieTitleProps) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames(styles.movieTitle, className)} {...props}>
          {title}
        </a>
      </Link>
    );
  }
  return (
    <span className={classNames(styles.movieTitle, className)} {...props}>
      {title}
    </span>
  );
};

export default MovieTitle;
