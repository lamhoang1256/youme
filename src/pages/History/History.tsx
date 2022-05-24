import MovieList from "components/MovieList/MovieList";

const History = () => {
  const moviesHistory = JSON.parse(localStorage.getItem("movie-history") || "[]");
  return (
    <div className="container">
      <MovieList movieList={moviesHistory} />
    </div>
  );
};

export default History;
