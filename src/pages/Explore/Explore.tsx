import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import Tabs from "components/Tabs/Tabs";
import { Genres } from "interfaces/api";
import { Filters, IExploreCard } from "interfaces/explore";
import { filterByCategory, getAllGenres } from "apis/configAPI";
import ExploreList from "./module/ExploreList/ExploreList";
import { StyledExplore } from "./explore.style";
import ExploreFilter from "./module/ExploreFilter/ExploreFilter";

const defaultGenresTab = 2;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTabId, setSelectedTabId] = useState<number>(defaultGenresTab);
  const [allGenres, setAllGenres] = useState<Genres[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [exploreList, setExploreList] = useState<IExploreCard[]>([]);

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

  const getKey = (indexPage: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    const sort = previousPageData?.data?.searchResults.slice(-1)[0].sort || "";
    return `${JSON.stringify(filters)}sort-${sort}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => filterByCategory({ ...filters, sort: key.split("sort-")[1] }),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    if (!data) return;
    const newExploreList = data?.reduce(
      (prevExplore: any, currExplore: any) => [...prevExplore, ...currExplore.data.searchResults],
      [],
    );
    setExploreList(newExploreList);
  }, [data]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchGenres();
  }, []);

  return (
    <StyledExplore className="container">
      {loading && "Loading"}
      {!loading && (
        <>
          {/* All tab filter movie by category */}
          <Tabs onClick={onClickTab} tabs={allGenres} selectedTabId={selectedTabId} />
          <ExploreFilter
            allGenres={allGenres}
            filters={filters}
            setFilters={setFilters}
            selectedTabId={selectedTabId}
            setExploreList={setExploreList}
          />
          {/* All movie has been filtered */}
          {exploreList.length > 0 && (
            <InfiniteScroll
              dataLength={data?.length || 0}
              next={() => setSize((size) => size + 1)}
              hasMore={!error && data?.slice(-1)[0].data.searchResults.length !== 0}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <ExploreList exploreList={exploreList} />
            </InfiniteScroll>
          )}
        </>
      )}
    </StyledExplore>
  );
};

export default Explore;
