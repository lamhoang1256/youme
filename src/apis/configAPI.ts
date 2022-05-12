const URL = process.env.REACT_APP_URL_API;
const URL2 = process.env.REACT_APP_URL_API_2;

export default {
  // Get Banner
  getBanners: (size: number) => `${URL2}/homePage/banners?size=${size}`,
  // Get Home
  getHome: (page: number) => `${URL}/homePage/getHome?page=${page}`,
  // Get Movie Detail
  getMovieDetail: (genre: string, id: number, category: number) =>
    `${URL}/${genre}/get?id=${id}&category=${category}`,
};
