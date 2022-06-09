import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import IonIcon from "@reacticons/ionicons";
import { searchGetKeyword } from "apis/configAPI";
import { useOnClickOutside } from "hooks/useClickOutside";
import { useDebounce } from "hooks/useDebounce";

const StyledSearchBar = styled.div`
  margin-bottom: 20px;
  position: relative;
  .searchbar {
    position: relative;
    background-color: #39354d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .searchbar-input {
    border-radius: 10px;
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px 20px;
    height: 100%;
    font-size: 1.7rem;
    min-height: 45px;
    color: var(--white);
    border: 1px solid transparent;
  }
  .searchbar-input:focus {
    border: 1px solid var(--primary-color);
  }
  .searchbar-input::placeholder {
    color: #eee;
  }
  .searchbar-submit {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 12px;
    font-size: 2rem;
    cursor: pointer;
    color: rgb(138, 147, 155);
    background-color: transparent;
  }
  .searchbar-result {
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    background-color: var(--dark-color);
    z-index: 10;
    border-radius: 8px;
    height: 400px;
    overflow-y: scroll;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(-45deg, #6a5af9, #d66efd);
      border-radius: 50px;
    }
  }
  .searchbar-result li {
    padding: 14px;
    transition: all 0.25s linear;
    a {
      color: var(--white);
    }
    em {
      color: var(--primary-color);
      font-weight: 600;
    }
    &:hover {
      background-color: #666666;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0 auto 30px;
    .searchbar-input {
      padding: 16px 20px;
    }
  }
`;

const SearchBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
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
    <StyledSearchBar ref={searchRef}>
      <form className="searchbar" onSubmit={handleNavigateSearch}>
        <input
          type="text"
          placeholder={t("Search...")}
          value={searchValue}
          className="searchbar-input"
          onChange={handleSearch}
        />
        <button className="searchbar-submit" type="submit">
          <IonIcon name="search-outline" />
        </button>
      </form>
      {showResults && keywordList.length > 0 && (
        <ul className="searchbar-result">
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
    </StyledSearchBar>
  );
};

export default SearchBar;
