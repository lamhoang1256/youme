import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { resizeImage } from "constants/global";
import { MovieTitle } from "modules/MovieTitle";
import { ILeaderBoard } from "types";
import styles from "./homeTrending.module.scss";

interface HomeTrendingProps {
  trendings: ILeaderBoard[];
}

const HomeTrending = ({ trendings }: HomeTrendingProps) => {
  return (
    <div className={styles.homeTrending}>
      <h3 className={styles.homeTrendingHeading}>Top Trending</h3>
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
          const href = `/detail/${id}?cate=${domainType}`;
          if (Number.isNaN(id) || Number.isNaN(domainType)) return null;
          return (
            <SwiperSlide className={styles.homeTrendingItem} key={id}>
              <div className={styles.homeTrendingItem}>
                <Image
                  alt={title}
                  width={270}
                  height={152}
                  src={resizeImage(cover, 270, 152)}
                  className={styles.homeTrendingThumbnail}
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
