import IonIcon from "@reacticons/ionicons";
import { useAppSelector } from "App/store";
import Button from "components/button/Button";
import Heading from "components/heading/Heading";
import ImageResize from "components/image/ImageResize";
import LabelNormal from "components/label/LabelNormal";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { IDetailMovie } from "types/detail";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IMovieCard } from "types/components";
import DetailButton from "./DetailButton";
import DetailCategory from "./DetailCategory";
import DetailDescription from "./DetailDescription";

interface DetailContentProps {
  detail: IDetailMovie;
}

const StyledDetailContent = styled.div`
  .detail-header {
    display: flex;
    gap: 30px;
  }
  .detail-poster {
    margin: 0 auto;
    width: 220px;
    height: 310px;
    border-radius: 20px;
    overflow: hidden;
    background-color: var(--bg-skeleton);
  }
  .detail-content {
    flex: 1;
    gap: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .detail-score {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.8rem;
  }
  .detail-score span {
    font-size: 2.2rem;
    color: #e8b647;
  }
  .detail-action {
    display: flex;
    gap: 14px;
  }
  .detail-watch {
    width: 210px;
    border-radius: 40px;
    font-weight: 600;
  }
  @media screen and (max-width: 767.98px) {
    .detail-header {
      flex-direction: column;
    }
    .detail-action {
      margin-top: 10px;
    }
  }
  .detail-overview {
    margin-top: 30px;
  }
  .detail-thumbnail {
    margin: 30px auto 0;
    width: 100%;
    max-width: 750px;
    aspect-ratio: auto 750/422;
    background-color: var(--bg-skeleton);
    border-radius: 14px;
    overflow: hidden;
  }
`;

const DetailContent = ({ detail }: DetailContentProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IMovieCard[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const url = `/watch/${detail?.id}?cate=${detail?.category}`;

  const getFavoritesFromDB = async () => {
    const colRef = doc(db, "users", currentUser?.uid);
    const data = await getDoc(colRef);
    return data?.data()?.favorites;
  };

  const updateStatusFavorite = async () => {
    if (!currentUser) return;
    const backendFavorites = await getFavoritesFromDB();
    const isAdded = backendFavorites?.some((favorite: IMovieCard) => favorite.id === detail?.id); // check if the movie has been added in firebase or not
    setIsFavorite(isAdded);
    setFavorites(backendFavorites);
  };

  const handleAddFavoriteMovie = async () => {
    if (!currentUser?.uid) {
      toast.error(t("Please Login"));
      return;
    }
    const colRef = doc(db, "users", currentUser?.uid);
    const favoritesDB = await getFavoritesFromDB();
    const hasAdded = favoritesDB?.some((favorite: any) => favorite.id === detail.id);
    // if movie has been added to the playlist categories
    if (hasAdded && colRef) {
      const removeFavoriteMovie = async () => {
        try {
          const removedFavorites = favorites.filter((favorite) => favorite.id !== detail.id);
          await updateDoc(colRef, { favorites: [...removedFavorites] });
          updateStatusFavorite();
          toast.success(t("Success remove favorite movie"));
        } catch (error: any) {
          toast.error(error.message);
        }
      };
      removeFavoriteMovie();
    }
    // if movie hasn't been added to the playlist categories
    if (!hasAdded && colRef) {
      const addFavoriteMovie = async () => {
        try {
          const favoriteMovie = {
            coverVerticalUrl: detail?.coverVerticalUrl,
            domainType: detail?.category,
            id: detail?.id,
            name: detail?.name,
          };
          await updateDoc(colRef, { favorites: [favoriteMovie, ...favorites] });
          updateStatusFavorite();
          toast.success(t("Success add favorite movie"));
        } catch (error: any) {
          toast.error(error.message);
        }
      };
      addFavoriteMovie();
    }
  };

  useEffect(() => {
    updateStatusFavorite();
  }, [currentUser]);

  return (
    <StyledDetailContent>
      <div className="detail-header">
        <ImageResize
          url={detail?.coverVerticalUrl}
          width="220"
          height="310"
          alt="poster"
          className="detail-poster"
        />
        <div className="detail-content">
          <div className="detail-heading">
            <Heading fontSize="2.4rem">{detail?.name}</Heading>
            <div className="detail-score">
              <IonIcon name="star-outline" />
              {detail?.score}
            </div>
          </div>
          <DetailDescription rowLines={4}>{detail?.introduction}</DetailDescription>
          <DetailCategory categories={detail?.tagList} />
          <div className="detail-action">
            <Button to={url} height="50" kind="primary" className="detail-watch">
              {t("Watch now")}
            </Button>
            <DetailButton onClick={handleAddFavoriteMovie} isActive={isFavorite}>
              <IonIcon name="heart" />
            </DetailButton>
            <DetailButton isActive={false}>
              <IonIcon name="share-social-outline" />
            </DetailButton>
          </div>
        </div>
      </div>
      <div className="detail-overview">
        <DetailDescription lineHeight={1.9}>
          <LabelNormal>{t("Summary")} : </LabelNormal>
          {detail?.introduction}
        </DetailDescription>
        <ImageResize
          url={detail?.coverHorizontalUrl}
          width="750"
          alt="thumbnail"
          className="detail-thumbnail"
        />
      </div>
    </StyledDetailContent>
  );
};

export default DetailContent;
