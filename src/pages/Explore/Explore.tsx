import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IGenres, IFilters } from "types/explore";
import { getAllGenres } from "apis/configAPI";
import MovieList from "components/movie/MovieList";
import Tabs from "components/tabs/Tabs";
import LoadingSpinner from "components/loading/LoadingSpinner";
import { IMovieCard } from "types/components";
import EndOfPage from "components/notification/EndOfPage";
import ExploreFilter from "module/explore/ExploreFilter";
import { useFetchExplore } from "hooks/useFetchExplore";

const StyledExplore = styled.div``;
const initialFilters = {
  area: "",
  category: "",
  year: "",
  subtitles: "",
  order: "up",
  params: "",
  sort: "",
  size: 14,
};

const Explore = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const type = Number(searchParams.get("type"));
  const defaultGenresTab = type || 2;
  const [loading, setLoading] = useState(true);
  const [selectedTabId, setSelectedTabId] = useState(defaultGenresTab);
  const [allGenres, setAllGenres] = useState<IGenres[]>([]);
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  const [exploreList, setExploreList] = useState<IMovieCard[]>([]);

  const fetchGenres = async () => {
    setLoading(true);
    try {
      const { data } = await getAllGenres();
      const defaultGenre = data.filter((genre: any) => genre.id === defaultGenresTab)[0];
      setAllGenres(data);
      setFilters({ ...filters, params: defaultGenre.params });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onClickTab = (keyTab: number) => {
    setSelectedTabId(keyTab);
    const genreTab = allGenres.filter((genre) => genre.id === keyTab)[0];
    setFilters({ ...initialFilters, params: genreTab.params });
  };
  const { data, setSize, error } = useFetchExplore(filters);

  useEffect(() => {
    if (!data) return;
    const newData = data?.reduce((prevList: any, newList: any) => [...prevList, ...newList], []);
    setExploreList(newData);
  }, [data]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = `Youme - ${t("Explore")}`;
    fetchGenres();
  }, []);

  return (
    <StyledExplore className="container">
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          {/* All tab filter movie by category */}
          <Tabs onClick={onClickTab} tabs={allGenres} selectedTabId={selectedTabId} />
          <ExploreFilter
            allGenres={allGenres}
            filters={filters}
            setFilters={setFilters}
            selectedTabId={selectedTabId}
          />
          {/* All movie has been filtered */}
          {exploreList.length > 0 && (
            <InfiniteScroll
              dataLength={data?.length || 0}
              next={() => setSize((size) => size + 1)}
              hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
              loader={<LoadingSpinner />}
              endMessage={<EndOfPage />}
            >
              <MovieList movieList={exploreList} />
            </InfiniteScroll>
          )}
        </>
      )}
    </StyledExplore>
  );
};

export default Explore;
