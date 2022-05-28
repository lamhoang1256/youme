import { useAppSelector } from "App/store";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import MovieList from "components/MovieList/MovieList";

const Favorites = () => {
  const crumbs = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Favorites", path: "/favorites" },
  ];

  const { currentUser } = useAppSelector((state) => state.auth);
  const favorites = currentUser?.favorites;

  return (
    <div className="container">
      <Breadcrumb crumbs={crumbs} />
      {favorites && <MovieList movieList={favorites} />}
    </div>
  );
};

export default Favorites;
