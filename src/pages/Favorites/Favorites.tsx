import { useAppSelector } from "App/store";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import MovieList from "components/MovieList/MovieList";
import Nothing from "components/Nothing/Nothing";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { IMovieList } from "interfaces/components";
import { useEffect, useState } from "react";

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Favorites", path: "/favorites" },
];

const Favorites = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IMovieList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (currentUser?.uid) {
        const colRef = doc(db, "users", currentUser.uid);
        const data = await getDoc(colRef);
        setFavorites(data.data()?.favorites);
      }
      setLoading(false);
    };
    getData();
  }, [currentUser]);

  return (
    <div className="container">
      <Breadcrumb crumbs={crumbs} />
      {loading && <LoadingSpinner />}
      {!loading && favorites.length > 0 ? (
        <MovieList movieList={favorites} />
      ) : (
        <Nothing
          image={`${process.env.REACT_APP_PUBLIC}/images/favorites.png`}
          heading="No Movies Added!"
          description="There are no items in your favourite."
          titleButton="Add more"
          redirect="/explore"
        />
      )}
    </div>
  );
};

export default Favorites;
