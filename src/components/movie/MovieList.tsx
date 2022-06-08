import styled from "styled-components";
import MovieCard from "components/movie/MovieCard";
import { IMovieCard } from "types/components";

interface MovieListProps {
  movieList: IMovieCard[];
}

export const StyledMovieList = styled.div`
  .movie-list {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
    grid-gap: 15px;
  }
  @media screen and (max-width: 640px) {
    .movie-list {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

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
