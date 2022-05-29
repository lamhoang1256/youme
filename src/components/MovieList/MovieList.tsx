import MovieCard from "components/MovieCard/MovieCard";
import { StyledMovieList } from "./movieList.style";

interface MovieListProps {
  movieList: {
    coverVerticalUrl: string;
    domainType: number;
    id: string;
    name: string;
  }[];
}

const MovieList = ({ movieList }: MovieListProps) => {
  return (
    <StyledMovieList>
      {movieList.length > 0 && (
        <div className="movie-list">
          {movieList.map((explore) => (
            <MovieCard movie={explore} key={explore.id} />
          ))}
        </div>
      )}
    </StyledMovieList>
  );
};

export default MovieList;
