import axios from "./axiosClient";

export const getSearchKeywords = async (keyword: string): Promise<string[]> =>
  (
    await axios.post(`search/searchLenovo`, {
      searchKeyWord: keyword,
      size: 10,
    })
  ).data.data.searchResults;

export const searchWithKeyword = async (keyword: string): Promise<any> =>
  (
    await axios.post("search/v1/searchWithKeyWord", {
      searchKeyWord: keyword,
      size: 50,
      sort: "",
      searchType: "",
    })
  ).data.data.searchResults;

export const getTopSearches = async (): Promise<any> =>
  (await axios.get("search/v1/searchLeaderboard")).data.data.list;
