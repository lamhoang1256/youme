import { MediaParams } from "interfaces/api";
import axiosClient from "./axiosClient";

const URL = process.env.REACT_APP_URL_API;
const URL2 = process.env.REACT_APP_URL_API_2;

const configAPI = {
  getBanners: (params: { size: number }) => {
    const url = `${URL2}/homePage/banners`;
    return axiosClient.get(url, { params });
  },

  getLeaderBoard: () => {
    const url = `${URL}/search/v1/searchLeaderboard`;
    return axiosClient.get(url);
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
    const paramsGetDetail = {
      category,
      id: contentId,
    };
    const dataDetailMovie = await configAPI.getMovieDetail(paramsGetDetail);
    const episodeCurrentID = episodeId === 0 ? dataDetailMovie.data.episodeVo[0].id : episodeId;
    // get data movie of current episode being watched
    let dataCurrentEpisode = dataDetailMovie.data.episodeVo.filter(
      (episode: { id: number }) => episode.id === episodeCurrentID,
    )[0];
    const paramsGetUrlsMedia = dataCurrentEpisode.definitionList.map((definition: any) => {
      return {
        category,
        contentId,
        episodeId: episodeCurrentID,
        definition: definition.code,
      };
    });
    // get url movie with all type quality
    const dataQuanlities = await Promise.all(
      paramsGetUrlsMedia.map((paramsMedia: MediaParams) => configAPI.getWatchAPI(paramsMedia)),
    );
    const qualities = dataQuanlities.map((quality) => quality.data);
    // bring subtitle of Vietnamese to first element of array to when watch media player will set Vietnamese is default sub
    const subtitlesFirstVN = [...dataCurrentEpisode.subtitlingList].reduce(
      (prevSub: any, currentSub: any) => {
        if (currentSub.languageAbbr === "vi") {
          return [currentSub, ...prevSub];
        }
        return [...prevSub, currentSub];
      },
      [],
    );
    // get description number of quality Ex: HD -> 1080p
    const qualityList = qualities.map((quality) => {
      const qualityDesc = dataCurrentEpisode.definitionList.filter(
        (definition: any) => definition.code === quality.currentDefinition,
      );
      return { ...quality, qualityDesc: qualityDesc[0] };
    });
    dataCurrentEpisode = {
      ...dataCurrentEpisode,
      qualities: qualityList,
      subtitlingList: subtitlesFirstVN,
    };
    return {
      dataDetailMovie: dataDetailMovie.data,
      dataCurrentEpisode,
      qualities,
    };
  },
};

export default configAPI;
