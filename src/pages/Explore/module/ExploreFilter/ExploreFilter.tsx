import { v4 as uuidv4 } from "uuid";
import { StyledExploreButton, StyledExploreTabPanel } from "pages/Explore/explore.style";
import { Genres } from "interfaces/api";
import { Filters } from "interfaces/explore";

interface ExploreFilterProps {
  allGenres: Genres[];
  handleSearchByCategory: (choice: any) => void;
  selectedTabId: number;
  filters: Filters;
}

const ExploreFilter = ({
  allGenres,
  handleSearchByCategory,
  selectedTabId,
  filters,
}: ExploreFilterProps) => {
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
