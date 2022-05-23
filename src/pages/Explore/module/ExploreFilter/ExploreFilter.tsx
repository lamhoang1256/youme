import { v4 as uuidv4 } from "uuid";
import { StyledExploreButton, StyledExploreTabPanel } from "pages/Explore/explore.style";
import { Filters, IExploreCard } from "interfaces/explore";
import { filterByCategory } from "apis/configAPI";
import { Genres } from "interfaces/api";

export interface ExploreFilterProps {
  allGenres: Genres[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  selectedTabId: number;
  setExploreList: React.Dispatch<React.SetStateAction<IExploreCard[]>>;
}

const ExploreFilter = (props: ExploreFilterProps) => {
  const { allGenres, filters, setFilters, selectedTabId, setExploreList } = props;

  const fetchFilterByCategory = async (params: Filters) => {
    try {
      const { data } = await filterByCategory(params);
      setExploreList(data.searchResults);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchByCategory = (choice: any) => {
    setFilters({ ...filters, ...choice });
    fetchFilterByCategory({ ...filters, ...choice });
  };

  return (
    <div>
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
  );
};

export default ExploreFilter;
