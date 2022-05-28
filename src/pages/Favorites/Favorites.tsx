import { useAppSelector } from "App/store";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import MovieList from "components/MovieList/MovieList";
import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Favorites", path: "/favorites" },
];

interface IFavorites {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
}

const Favorites = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (currentUser?.uid) {
        const colRef = doc(db, "users", currentUser?.uid);
        const data = await getDoc(colRef);
        setFavorites(data.data()?.favorites);
      }
    };
    getData();
  }, [currentUser]);

  return (
    <div className="container">
      <Breadcrumb crumbs={crumbs} />
      {favorites && <MovieList movieList={favorites} />}
    </div>
  );
};

export default Favorites;
