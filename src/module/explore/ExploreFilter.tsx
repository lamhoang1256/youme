import { v4 as uuidv4 } from "uuid";
import { IFilters, IGenres } from "interfaces/explore";
import { filterByCategory } from "apis/configAPI";
import { IMovieCard } from "interfaces/components";
import styled from "styled-components";

interface Props {
  background: string;
}

export const StyledExploreFilter = styled.div`
  margin-top: 15px;
`;

export const StyledExploreTabPanel = styled.div`
  .genre-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
  }
`;

export const StyledExploreButton = styled.button<Props>`
  background: ${(props) => (props.background === "active" ? "#8a3cff" : "#3d6ef7")};
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;

export interface ExploreFilterProps {
  allGenres: IGenres[];
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  selectedTabId: number;
  setExploreList: React.Dispatch<React.SetStateAction<IMovieCard[]>>;
}

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
                        background={filters[screeningType] === params ? "active" : "normal"}
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
    </StyledExploreFilter>
  );
};

export default ExploreFilter;
