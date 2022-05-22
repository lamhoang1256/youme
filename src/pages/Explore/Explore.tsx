import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { v4 as uuidv4 } from "uuid";
import { Genres } from "interfaces/api";
import { Filters, IExploreCard } from "interfaces/explore";
import { filterByCategory, getAllGenres } from "apis/configAPI";
import Tabs from "components/Tabs/Tabs";
import ExploreList from "./module/ExploreList/ExploreList";
import { StyledExplore, StyledExploreButton, StyledExploreTabPanel } from "./explore.style";

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
  const [selectedTabId, setSelectedTabId] = useState<number>(2);
  const [allGenres, setAllGenres] = useState<Genres[]>(Object);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [exploreList, setExploreList] = useState<IExploreCard[]>(Object);

  const fetchGenres = async () => {
    setLoading(true);
    try {
      const { data } = await getAllGenres();
      setAllGenres(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchFilterByCategory = async (params: Filters) => {
    try {
      const { data } = await filterByCategory(params);
      setExploreList(data.searchResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchGenres();
  }, []);

  const onClickTab = (keyTab: number) => {
    setSelectedTabId(keyTab);
    setFilters(initialFilters);
  };

  const handleSearchByCategory = (choice: any) => {
    setFilters({ ...filters, ...choice });
    fetchFilterByCategory({ ...filters, ...choice });
  };

  const getKey = (indexPage: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    const sort = previousPageData?.data?.searchResults.slice(-1)[0].sort || "";
    return `explore${sort}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => filterByCategory({ ...filters, sort: key.split("explore")[1] }),
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

  return (
    <StyledExplore className="container">
      {loading && "Loading"}
      {!loading && (
        <>
          <Tabs onClick={onClickTab} tabs={allGenres} />

          <div className="tab-content">
            {allGenres.map((genresOneTab, index) => (
              <StyledExploreTabPanel key={uuidv4()}>
                {selectedTabId === genresOneTab.id && (
                  <>
                    {allGenres[index].screeningItems.map((genresOneRow) => (
                      <div className="genre-list" key={uuidv4()}>
                        {genresOneRow.items.map((genres) => {
                          const { name, params, screeningType } = genres;
                          const choice = {
                            [screeningType]: params,
                            params: genresOneTab.params,
                          };
                          return (
                            <StyledExploreButton
                              key={uuidv4()}
                              type="button"
                              onClick={() => handleSearchByCategory(choice)}
                              background={filters[screeningType] === params ? "yellow" : "blue"}
                            >
                              {name}
                            </StyledExploreButton>
                          );
                        })}
                      </div>
                    ))}
                  </>
                )}
              </StyledExploreTabPanel>
            ))}
          </div>

          {exploreList.length > 0 && (
            <InfiniteScroll
              dataLength={data?.length || 0}
              next={() => setSize((size) => size + 1)}
              hasMore={!error}
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
