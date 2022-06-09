import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { IFilters, IGenres } from "types/explore";
import { filterByCategory } from "apis/configAPI";
import { IMovieCard } from "types/components";
import Button from "components/button/Button";

interface ExploreFilterProps {
  allGenres: IGenres[];
  filters: IFilters;
  selectedTabId: number;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  setExploreList: React.Dispatch<React.SetStateAction<IMovieCard[]>>;
}

const StyledExploreFilter = styled.div`
  margin-top: 15px;
  .genres-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
  }
  .genres {
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
  @media screen and (max-width: 1023.98px) {
    .genres-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      width: 100%;
    }
    .genres {
      scroll-snap-align: start;
      min-width: fit-content;
      font-size: 1.5rem;
      padding: 4px 8px;
    }
  }
`;

const ExploreFilter = (props: ExploreFilterProps) => {
  const { allGenres, filters, setFilters, selectedTabId, setExploreList } = props;
  const fetchFilterByCategory = async (params: IFilters) => {
    try {
      const { data } = await filterByCategory(params);
      setExploreList(data.searchResults);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchByCategory = (category: any) => {
    setFilters({ ...filters, ...category });
    fetchFilterByCategory({ ...filters, ...category });
  };

  return (
    <StyledExploreFilter>
      {allGenres.map((tab, index) => (
        // tab is all data of 1 tab panel
        <div key={uuidv4()}>
          {selectedTabId === tab.id &&
            allGenres[index].screeningItems.map((field) => (
              // field is all data of 1 row Ex: All regions: American, Japan, Korea...
              <div className="genres-list" key={uuidv4()}>
                {field.items.map((genres) => {
                  const { name, params, screeningType } = genres;
                  const choice = {
                    [screeningType]: params,
                    params: tab.params,
                  };
                  return (
                    <Button
                      key={uuidv4()}
                      className="genres"
                      onClick={() => handleSearchByCategory(choice)}
                      height="35"
                      kind={filters[screeningType] === params ? "primary" : "sea"}
                    >
                      {name}
                    </Button>
                  );
                })}
              </div>
            ))}
        </div>
      ))}
    </StyledExploreFilter>
  );
};

export default ExploreFilter;
