import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import MovieList from "components/MovieList/MovieList";

const History = () => {
  const crumbs = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "History", path: "/history" },
  ];

  const moviesHistory = JSON.parse(localStorage.getItem("movie-history") || "[]");
  return (
    <div className="container">
      <Breadcrumb crumbs={crumbs} />
      <MovieList movieList={moviesHistory} />
    </div>
  );
};

export default History;
