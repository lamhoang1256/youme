import { MediaParams } from "interfaces/api";
import axiosClient from "./axiosClient";

const URL = process.env.REACT_APP_API;
const URL_PC = process.env.REACT_APP_API_PC;

export const getBanners = (params: { size: number }) => {
  const url = `${URL_PC}/homePage/banners`;
  return axiosClient.get(url, { params });
};

export const getLeaderBoard = () => {
  const url = `${URL}/search/v1/searchLeaderboard`;
  return axiosClient.get(url);
};

export const getHome = (params: { page: number }) => {
  const url = `${URL}/homePage/getHome`;
  return axiosClient.get(url, { params });
};

export const getMovieDetail = (params: { category: number; id: number }) => {
  const url = `${URL}/movieDrama/get`;
  return axiosClient.get(url, { params });
};

export const getMovieMedia = (params: MediaParams) => {
  const url = `${URL}/media/previewInfo`;
  return axiosClient.get(url, { params });
};

export const getWatchAPI = (params: MediaParams) => {
  const url = `${URL}/media/previewInfo`;
  return axiosClient.get(url, { params });
};

export const getWatchMedia = async (params: MediaParams) => {
  const { category, contentId, episodeId } = params;
  const paramsGetDetail = {
    category,
    id: contentId,
  };
  const detailMovie = await getMovieDetail(paramsGetDetail);

  const currentWatchId = episodeId === 0 ? detailMovie.data.episodeVo[0].id : episodeId;
  let detailCurrentPlay = detailMovie.data.episodeVo.filter(
    (episode: { id: number }) => episode.id === currentWatchId,
  )[0];
  const paramsGetUrlsMedia = detailCurrentPlay.definitionList.map((definition: any) => {
    return {
      category,
      contentId,
      episodeId: currentWatchId,
      definition: definition.code,
    };
  });
  // get url and data of episode with all quality type
  const quanlitiesFetch = await Promise.all(
    paramsGetUrlsMedia.map((paramsMedia: MediaParams) => getWatchAPI(paramsMedia)),
  );
  const qualities = quanlitiesFetch.map((quality) => quality.data);

  // bring subtitle of Vietnamese to first element of array to when watch media player will set Vietnamese is default sub
  const subtitlesFirstVN = [...detailCurrentPlay.subtitlingList].reduce(
    (prevSub: any, currentSub: any) => {
      if (currentSub.languageAbbr === "vi") {
        return [currentSub, ...prevSub];
      }
      return [...prevSub, currentSub];
    },
    [],
  );

  // get number describe quality Ex: HD -> 1080p
  const qualitiesHasDesc = qualities.map((quality) => {
    const qualityDesc = detailCurrentPlay.definitionList.filter(
      (definition: any) => definition.code === quality.currentDefinition,
    );
    return { ...quality, qualityDesc: qualityDesc[0] };
  });
  detailCurrentPlay = {
    ...detailCurrentPlay,
    qualities: qualitiesHasDesc,
    subtitlingList: subtitlesFirstVN,
  };
  return {
    detailMovie: detailMovie.data,
    detailCurrentPlay,
    qualities,
  };
};
