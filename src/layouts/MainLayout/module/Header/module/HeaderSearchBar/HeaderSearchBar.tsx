import IonIcon from "@reacticons/ionicons";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { searchGetKeyword } from "apis/configAPI";
import { useOnClickOutside } from "hooks/useClickOutside";
import { useDebounce } from "hooks/useDebounce";
import { useTranslation } from "react-i18next";
import { StyledHeaderSearchBar } from "./headerSearchBar.style";

const HeaderSearchBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentURL = window.location.href;
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
    const inputValue: string = e.target.value;
    if (inputValue.startsWith(" ")) return;
    setSearchValue(inputValue);
    setShowResults(true);
  };

  const handleNavigateSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/search?query=${searchValue}`);
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
    <StyledHeaderSearchBar ref={searchRef}>
      <form className="header-searchbar" onSubmit={handleNavigateSearch}>
        <input
          type="text"
          placeholder={t("Search...")}
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
        />
        <button className="search-icon" type="submit">
          <IonIcon name="search-outline" />
        </button>
      </form>
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
    </StyledHeaderSearchBar>
  );
};

export default HeaderSearchBar;
