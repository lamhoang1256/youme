const URL = process.env.REACT_APP_URL_API;
const URL2 = process.env.REACT_APP_URL_API_2;

export default {
  getBanners: (size: number) => `${URL2}/homePage/banners?size=${size}`,
  getHome: (page: number) => `${URL}/homePage/getHome?page=${page}`,
  getMovieDetail: (genre: string, id: number, category: number) =>
    `${URL}/${genre}/get?id=${id}&category=${category}`,
  getMovieMedia: (category: number, contentId: number, episodeId: number) =>
    `${URL}/media/previewInfo?category=${category}&contentId=${contentId}&episodeId=${episodeId}&definition=GROOT_LD`,
  getLeaderBoard: `${URL}/search/v1/searchLeaderboard`,
};
