import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "constants/resizeImage";
import { IMovieDetail } from "interfaces/detail";
import { useAppSelector } from "App/store";
import ButtonGradient from "components/Button/ButtonGradient";
import { StyledDetailHeader, StyledDetailMain } from "./detailContent.style";

interface DetailContentProps {
  detail: IMovieDetail;
}

interface IFavorites {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
}

const DetailContent = ({ detail }: DetailContentProps) => {
  const { t } = useTranslation();
  const url = `/watch/${detail?.id}?cate=${detail?.category}`;
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  const getData = async () => {
    const colRef = doc(db, "users", currentUser?.uid);
    const data = await getDoc(colRef);
    setFavorites(data.data()?.favorites);
  };

  const handleAddFavoriteMovie = () => {
    if (!currentUser?.uid) {
      toast.error(t("Please Login"));
      return;
    }
    const isExistFavorite = favorites.some((favorite: any) => favorite.id === detail?.id);
    if (isExistFavorite) {
      toast.error(t("Movie is added favorites"));
      return;
    }
    const colRef = doc(db, "users", currentUser?.uid);
    if (colRef) {
      try {
        const favoriteMovie = {
          coverVerticalUrl: detail?.coverVerticalUrl,
          domainType: detail?.category,
          id: detail?.id,
          name: detail?.name,
        };
        updateDoc(colRef, { favorites: [favoriteMovie, ...currentUser.favorites] });
        getData();
        toast.success(t("Success add favorite movie"));
      } catch (error: any) {
        toast.error(error);
      }
    }
  };

  useEffect(() => {
    if (currentUser?.id) {
      getData();
    }
  }, [currentUser]);

  return (
    <>
      <StyledDetailHeader>
        <div className="detail-poster">
          <LazyLoadImage
            src={resizeImage(detail?.coverVerticalUrl, "220px", "310px")}
            alt="poster"
            effect="opacity"
          />
        </div>
        <div className="detail-main">
          <div className="detail-header">
            <h2 className="detail-heading">{detail?.name}</h2>
            <div className="detail-score">
              <IonIcon name="star-outline" />
              {detail?.score}
            </div>
          </div>
          <div className="detail-introduction">{detail?.introduction}</div>
          <div className="detail-categoríes">
            <h4>{t("Categories")}: </h4>
            {detail?.tagList.map((tag) => (
              <Link to={`/category/${tag.id}`} key={tag.id} className="detail-category">
                {tag.name}
              </Link>
            ))}
          </div>
          <div className="detail-action">
            <Link to={url}>
              <ButtonGradient type="button" className="primary detail-watch">
                {t("Watch now")}
              </ButtonGradient>
            </Link>
            <button
              type="button"
              className="detail-button detail-favorite"
              onClick={handleAddFavoriteMovie}
            >
              <IonIcon name="heart" />
            </button>
            <button type="button" className="detail-button detail-share">
              <IonIcon name="share-social-outline" />
            </button>
          </div>
        </div>
      </StyledDetailHeader>
      <StyledDetailMain>
        <div className="detail-summary">
          <span className="label-small">{t("Summary")} : </span>
          {detail?.introduction}
        </div>
        <div className="detail-banner">
          <LazyLoadImage
            src={resizeImage(detail?.coverHorizontalUrl, "750")}
            alt="banner"
            effect="opacity"
          />
        </div>
      </StyledDetailMain>
    </>
  );
};

export default DetailContent;
