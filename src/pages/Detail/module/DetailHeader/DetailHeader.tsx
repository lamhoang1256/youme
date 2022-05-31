import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "constants/resizeImage";
import { IMovieDetail } from "interfaces/detail";
import IonIcon from "@reacticons/ionicons";
import { useAppSelector } from "App/store";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "firebase-app/firebase-config";
import { useEffect, useState } from "react";
import ButtonGradient from "components/Button/ButtonGradient";
import { useTranslation } from "react-i18next";
import { StyledDetailHeader } from "./detailHeader.style";

interface DetailHeaderProps {
  detail: IMovieDetail;
}

interface IFavorites {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
}

const DetailHeader = ({ detail }: DetailHeaderProps) => {
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
      toast.error("Please Login");
      return;
    }
    const isExistFavorite = favorites.some((favorite: any) => favorite.id === detail?.id);
    if (isExistFavorite) {
      toast.error("Movie is added favorite");
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
        toast.success("Success add favorite movie");
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
    <StyledDetailHeader>
      <div className="detail-thumb">
        <LazyLoadImage
          src={resizeImage(detail?.coverVerticalUrl, "220px", "310px")}
          alt="Thumbnail"
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
  );
};

export default DetailHeader;
