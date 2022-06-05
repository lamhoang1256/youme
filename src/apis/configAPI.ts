import { IFilterByCategory, IMediaParams } from "interfaces/api";
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

export const getMovieMedia = (params: IMediaParams) => {
  const url = `${URL}/media/previewInfo`;
  return axiosClient.get(url, { params });
};

export const getWatchAPI = (params: IMediaParams) => {
  const url = `${URL}/media/previewInfo`;
  return axiosClient.get(url, { params });
};

export const getAllGenres = () => {
  const url = `${URL}/search/list`;
  return axiosClient.get(url);
};

export const filterByCategory = (params: IFilterByCategory) => {
  const url = "https://ga-mobile-api.loklok.tv/cms/app/search/v1/search";
  return axiosClient.post(url, params);
};

export const getMovieByCategory = (params: { category: number; sort: string }) => {
  const url = "https://ga-mobile-api.loklok.tv/cms/app/search/v1/search";
  return axiosClient.post(url, { ...params, params: "", size: 14 });
};

export const getWatchMedia = async (params: IMediaParams) => {
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
    paramsGetUrlsMedia.map((paramsMedia: IMediaParams) => getWatchAPI(paramsMedia)),
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

export const searchGetKeyword = (params: { searchKeyWord: string }) => {
  const url = "https://ga-mobile-api.loklok.tv/cms/app/search/searchLenovo";
  return axiosClient.post(url, { ...params, size: 10 });
};

export const searchWithKeyword = (params: { searchKeyWord: string }) => {
  const url = "https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchWithKeyWord";
  return axiosClient.post(url, { ...params, size: 56, sort: "", searchType: "" });
};

// eslint-disable-next-line consistent-return
export const getPreviewVideoMedia = async (page: number) => {
  try {
    const { data }: any = await axiosClient.get(
      `https://ga-mobile-api.loklok.tv/cms/app/recommendPool/getVideoFromRecommondPool?page=${page}`,
    );
    const requestMedia = data.map((item: any) => {
      const { definitionList } = item.mediaInfo;
      const definition = definitionList[definitionList.length - 1]?.code;
      return {
        contentId: item.id,
        episodeId: item.mediaInfo.id,
        category: item.category,
        definition,
      };
    });
    const response: any = await axiosClient.post(
      "https://ga-mobile-api.loklok.tv/cms/app/media/bathGetplayInfo",
      requestMedia,
    );
    const community = data.map((item: any, index: number) => {
      return {
        ...item,
        mediaUrl: response.data[index],
      };
    });
    return community;
  } catch (error) {
    console.log(error);
  }
};
