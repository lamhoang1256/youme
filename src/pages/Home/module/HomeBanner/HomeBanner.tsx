import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBanners } from "interfaces/home";
import { getBanners } from "apis/configAPI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledBanner } from "./homeBanner.style";
import { settingsBanner } from "./settingsBanner";

const HomeBanner = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [banners, setBanners] = useState<IBanners[]>([]);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const { data } = await getBanners({ size: 10 });
      setBanners(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="container">
      <StyledBanner>
        {loading && <div className="banner-loading" />}

        {!loading && (
          <Slider {...settingsBanner}>
            {banners.map((banner) => {
              const category = banner.jumpType === "DRAMA" ? 1 : 0;
              const url = `/detail/${banner.jumpParam}?cate=${category}`;
              return (
                <Link to={url} key={banner.id}>
                  <LazyLoadImage
                    className="banner-img"
                    src={`${banner.imgUrl}?imageMogr2/format/webp/format/webp`}
                    alt="Banner"
                    effect="opacity"
                  />
                </Link>
              );
            })}
          </Slider>
        )}
      </StyledBanner>
    </div>
  );
};

export default HomeBanner;
