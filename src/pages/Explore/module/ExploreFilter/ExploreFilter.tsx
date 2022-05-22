import { v4 as uuidv4 } from "uuid";
import { StyledExploreButton, StyledExploreTabPanel } from "pages/Explore/explore.style";
import { Filters } from "interfaces/explore";
import { useContext } from "react";
import { ExploreContext, IExploreContext } from "pages/Explore/Explore";
import { filterByCategory } from "apis/configAPI";

const ExploreFilter = () => {
  const ExploreStore = useContext(ExploreContext) as IExploreContext;
  const { allGenres, selectedTabId, filters, setExploreList, setFilters } = ExploreStore;

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
