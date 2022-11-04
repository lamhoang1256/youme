import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { resizeImage } from "constants/global";
import { MovieTitle } from "modules/MovieTitle";
import { ILeaderBoard } from "types";
import styles from "./homeTrending.module.scss";
import { PATH } from "constants/path";

interface HomeTrendingProps {
  trendings: ILeaderBoard[];
}

const HomeTrending = ({ trendings }: HomeTrendingProps) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.heading}>Top Trending</h3>
      <Swiper
        loop
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {trendings.map((trending) => {
          const { id, domainType, cover, title } = trending;
          const href = `${PATH.detail}/${domainType}/${id}`;
          if (Number.isNaN(id) || Number.isNaN(domainType)) return null;
          return (
            <SwiperSlide className={styles.item} key={id}>
              <div className={styles.item}>
                <Image
                  alt={title}
                  width={270}
                  height={152}
                  src={resizeImage(cover, 270, 152)}
                  className={styles.thumbnail}
                />
                <MovieTitle href={href}>{title}</MovieTitle>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeTrending;
