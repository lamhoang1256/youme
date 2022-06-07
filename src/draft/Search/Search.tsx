import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { searchWithKeyword } from "apis/configAPI";
import SearchBar from "draft/Search/module/SearchBar/SearchBar";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import MovieList from "components/movie/MovieList";
import { IMovieCard } from "interfaces/components";

const StyledSearch = styled.div``;

const Search = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState<IMovieCard[]>([]);

  const fetchMovieWithKeyWord = async (keyword: string) => {
    setLoading(true);
    try {
      const { data } = await searchWithKeyword({ searchKeyWord: keyword });
      setMovieList(data.searchResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieWithKeyWord(query);
  }, [query]);

  useEffect(() => {
    document.title = `Youme - ${t("Search")}`;
  }, []);

  return (
    <StyledSearch className="container">
      <SearchBar />
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          {query && (
            <h3>
              {t("Keyword")}: {query}
            </h3>
          )}
          <MovieList movieList={movieList} />
        </>
      )}
    </StyledSearch>
  );
};

export default Search;
