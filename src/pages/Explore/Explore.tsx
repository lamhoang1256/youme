import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { filterByCategory, getAllGenres } from "apis/configAPI";
import { Genres } from "interfaces/api";
import Tabs from "components/Tabs/Tabs";
import { StyledExplore, StyledExploreButton } from "./explore.style";
import ExploreList from "./module/ExploreList/ExploreList";

interface IObjectKeys {
  [key: string]: string | number;
}

interface Filters extends IObjectKeys {
  area: string;
  category: string;
  year: string;
  subtitles: string;
  order: string;
  params: string;
  sort: string;
  size: number;
}

export interface IExploreCard {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
  sort: string;
}

const initialFilters = {
  area: "",
  category: "",
  year: "",
  subtitles: "",
  order: "up",
  params: "",
  sort: "",
  size: 21,
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
    fetchFilterByCategory(initialFilters);
  }, []);

  const onClickTab = (keyTab: number) => {
    setSelectedTabId(keyTab);
    setFilters(initialFilters);
  };

  const handleSearchByCategory = (choice: any) => {
    setFilters({ ...filters, ...choice });
    fetchFilterByCategory({ ...filters, ...choice });
  };

  return (
    <StyledExplore className="container">
      {loading && "Loading"}
      {!loading && (
        <>
          <Tabs onClick={onClickTab} tabs={allGenres} />

          <div className="tab-content">
            {allGenres.map((genresOneTab, index) => (
              <div className="tab-panel" key={uuidv4()}>
                {selectedTabId === genresOneTab.id && (
                  <div>
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
                  </div>
                )}
              </div>
            ))}
          </div>

          <ExploreList exploreList={exploreList} />
        </>
      )}
    </StyledExplore>
  );
};

export default Explore;
