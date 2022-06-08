import { useAppSelector } from "App/store";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import LoadingSpinner from "components/loading/LoadingSpinner";
import MovieList from "components/movie/MovieList";
import Nothing from "components/notification/Nothing";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { IMovieCard } from "interfaces/components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Favorites", path: "/favorites" },
];

const Favorites = () => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IMovieCard[]>([]);
  const [loading, setLoading] = useState(true);

  const getFavorites = async () => {
    setLoading(true);
    const colRef = doc(db, "users", currentUser.uid);
    const data = await getDoc(colRef);
    setFavorites(data.data()?.favorites);
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser?.uid) {
      getFavorites();
    }
  }, [currentUser]);

  useEffect(() => {
    document.title = `Youme - ${t("Favorite")}`;
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Breadcrumb crumbs={crumbs} />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumb crumbs={crumbs} />
      {favorites.length > 0 ? (
        <MovieList movieList={favorites} />
      ) : (
        <Nothing
          image={`${process.env.REACT_APP_PUBLIC}/images/favorites.png`}
          heading="No Movies Added!"
          description="There are no items in your favourite"
          titleButton="Add more"
          redirect="/explore"
        />
      )}
    </div>
  );
};

export default Favorites;
