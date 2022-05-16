import { MediaParams } from "interfaces/api";
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

  getMovieMedia: (params: MediaParams) => {
    const url = `${URL}/media/previewInfo`;
    return axiosClient.get(url, { params });
  },

  getWatchAPI: (params: MediaParams) => {
    const url = `${URL}/media/previewInfo`;
    return axiosClient.get(url, { params });
  },

  getWatchMedia: async (params: MediaParams) => {
    const { category, contentId, episodeId } = params;
    const paramsDetail = {
      category,
      id: contentId,
    };
    const detailMovie = await configAPI.getMovieDetail(paramsDetail);
    const episodeNum = episodeId === 0 ? detailMovie.data.episodeVo[0].id : episodeId;
    let currentEpisode = detailMovie.data.episodeVo.filter(
      (episode: { id: number }) => episode.id === episodeNum,
    )[0];
    const paramsWatchList = currentEpisode.definitionList.map((definition: any) => {
      return {
        category: params.category,
        contentId: params.contentId,
        episodeId: episodeNum,
        definition: definition.code,
      };
    });
    const sources = await Promise.all(
      paramsWatchList.map((paramsItem: MediaParams) => configAPI.getWatchAPI(paramsItem)),
    );
    const qualities = sources.map((quality) => quality.data);
    const subtitlesFirstVN = [...currentEpisode.subtitlingList].reduce(
      (prevSub: any, currentSub: any) => {
        if (currentSub.languageAbbr === "vi") {
          return [currentSub, ...prevSub];
        }
        return [...prevSub, currentSub];
      },
      [],
    );

    const qualityList = qualities.map((quality) => {
      const quanlityDesc = currentEpisode.definitionList.filter(
        (definition: any) => definition.code === quality.currentDefinition,
      );
      return { ...quality, quanlityDesc: quanlityDesc[0] };
    });
    currentEpisode = {
      ...currentEpisode,
      qualities: qualityList,
      subtitlingList: subtitlesFirstVN,
    };
    return {
      detailMovie: detailMovie.data,
      currentEpisode,
      qualities,
    };
  },

  getLeaderBoard: () => {
    const url = `${URL}/search/v1/searchLeaderboard`;
    return axiosClient.get(url);
  },
};

export default configAPI;
