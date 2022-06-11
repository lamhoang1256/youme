import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { IMovieCard } from "types/components";
import { useAppSelector } from "App/store";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import LoadingSpinner from "components/loading/LoadingSpinner";
import MovieList from "components/movie/MovieList";
import ResultNotFound from "components/notification/ResultNotFound";

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Favorites", path: "/favorites" },
];

const Favorites = () => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IMovieCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser?.uid) {
      const getFavorites = async () => {
        setLoading(true);
        const colRef = doc(db, "users", currentUser.uid);
        const data = await getDoc(colRef);
        setFavorites(data.data()?.favorites);
        setLoading(false);
      };
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
        <ResultNotFound
          heading="No Movies Added!"
          description="There are no items in your favourite"
          titleButton="Add more"
          to="/explore"
        />
      )}
    </div>
  );
};

export default Favorites;
