import IonIcon from "@reacticons/ionicons";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { searchGetKeyword } from "apis/configAPI";
import { useOnClickOutside } from "hooks/useClickOutside";
import { useDebounce } from "hooks/useDebounce";
import { StyledHeaderSearch } from "./headerSearch.style";

const HeaderSearch = () => {
  const currentURL = window.location.href;
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchDebouced = useDebounce(searchValue, 500);
  useOnClickOutside(searchRef, () => setShowResults(false));

  const fetchGetKeyword = async (keyword: string) => {
    try {
      const { data } = await searchGetKeyword({ searchKeyWord: keyword });
      setKeywordList(data.searchResults);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e: any) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    setShowResults(true);
  };

  const handleNavigateSearch = () => {
    if (!searchValue) return;
    navigate(`/search?query=${searchValue}`);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleNavigateSearch();
    }
  };

  useEffect(() => {
    fetchGetKeyword(searchDebouced.trim());
  }, [searchDebouced]);

  useEffect(() => {
    // when change page clear value search input and close search result
    setSearchValue("");
    setShowResults(false);
  }, [currentURL]);

  return (
    <StyledHeaderSearch ref={searchRef}>
      <div className="header-searchbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <button className="search-icon" type="button" onClick={handleNavigateSearch}>
          <IonIcon name="search-outline" />
        </button>
      </div>
      {showResults && keywordList.length > 0 && (
        <ul className="header-result">
          {keywordList.map((keyword) => {
            const title = encodeURIComponent(
              keyword.replaceAll("<em>", "").replaceAll("</em>", ""),
            );
            return (
              <li key={uuidv4()}>
                <Link to={`/search?query=${title}`} dangerouslySetInnerHTML={{ __html: keyword }} />
              </li>
            );
          })}
        </ul>
      )}
    </StyledHeaderSearch>
  );
};

export default HeaderSearch;
