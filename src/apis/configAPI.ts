import axiosClient from "./axiosClient";

const URL = process.env.REACT_APP_URL_API;
const URL2 = process.env.REACT_APP_URL_API_2;

export default {
  getBanners: (params: { size: number }) => {
    const url = `${URL2}/homePage/banners`;
    return axiosClient.get(url, { params });
  },

  getHome: () => {
    const url = `${URL}/homePage/getHome`;
    return axiosClient.get(url);
  },

  getMovieDetail: (params: { category: number; id: number }) => {
    const url = `${URL}/movieDrama/get`;
    return axiosClient.get(url, { params });
  },

  getMovieMedia: (params: {
    category: number;
    contentId: number;
    episodeId: number;
    definition: string;
  }) => {
    const url = `${URL}/media/previewInfo`;
    return axiosClient.get(url, { params });
  },

  getLeaderBoard: () => {
    const url = `${URL}/search/v1/searchLeaderboard`;
    return axiosClient.get(url);
  },
};
