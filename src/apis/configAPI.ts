const URL = process.env.REACT_APP_URL_API;

export default {
  // Get Home
  getHome: (page: number) => `${URL}/homePage/getHome?page=${page}`,
  // Get Movie Detail
  getMovieDetail: (genre: string, id: number, category: number) =>
    `${URL}/${genre}/get?id=${id}&category=${category}`,
};
