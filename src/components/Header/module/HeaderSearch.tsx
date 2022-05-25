import IonIcon from "@reacticons/ionicons";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { searchGetKeyword } from "apis/configAPI";
import { useOnClickOutside } from "hooks/useClickOutside";
import { StyledHeaderSearch } from "./headerSearch.style";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

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
    const inputValue = e.target.value.trim();
    setSearchValue(inputValue);
    fetchGetKeyword(inputValue);
    setShowResults(true);
  };

  // if user click Enter from keyboard
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setShowResults(false);
      navigate(`/search?query=${searchValue}`);
    }
  };

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
        <div className="search-icon">
          <IonIcon name="menu-outline" />
        </div>
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
