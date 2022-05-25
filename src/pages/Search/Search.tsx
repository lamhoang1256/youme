import { useEffect, useState } from "react";
import { searchWithKeyword } from "apis/configAPI";
import { useSearchParams } from "react-router-dom";
import { IExploreCard } from "interfaces/explore";
import MovieList from "components/MovieList/MovieList";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [loading, setLoading] = useState<boolean>(true);
  const [movieList, setMovieList] = useState<IExploreCard[]>([]);

  const fetchMovieWithKeyWord = async (keyword: string) => {
    setLoading(true);
    try {
      const { data } = await searchWithKeyword({ searchKeyWord: keyword });
      console.log(data);
      setMovieList(data.searchResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieWithKeyWord(query);
  }, [query]);

  return (
    <div className="container">
      {loading && "Loading"}
      {!loading && <MovieList movieList={movieList} />}
    </div>
  );
};

export default Search;
