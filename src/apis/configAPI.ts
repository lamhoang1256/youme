import axiosClient from "./axiosClient";

const URL = process.env.REACT_APP_URL_API;
const URL2 = process.env.REACT_APP_URL_API_2;

const configAPI = {
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

  getWatchAPI: (params: {
    category: number;
    contentId: number;
    episodeId: number;
    definition: string;
  }) => {
    const url = `${URL}/media/previewInfo`;
    return axiosClient.get(url, { params });
  },

  getWatchMedia: async (params: {
    category: number;
    contentId: number;
    episodeId: number;
    definition: string;
  }) => {
    const paramsDetail = {
      category: params.category,
      id: params.contentId,
    };
    const detailMovie = await configAPI.getMovieDetail(paramsDetail);
    const paramsWatch = {
      category: params.category,
      contentId: params.contentId,
      episodeId: params.episodeId === 0 ? detailMovie.data.episodeVo[0].id : params.episodeId,
      definition: params.definition,
    };
    const detailWatch = await configAPI.getWatchAPI(paramsWatch);
    const detailBeingWatched = detailMovie.data.episodeVo.filter(
      (episode: { id: number }) => episode.id === Number(detailWatch.data.episodeId),
    )[0];
    return { detailMovie: detailMovie.data, detailWatch: detailWatch.data, detailBeingWatched };
  },

  getLeaderBoard: () => {
    const url = `${URL}/search/v1/searchLeaderboard`;
    return axiosClient.get(url);
  },
};

export default configAPI;
