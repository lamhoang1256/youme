import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import { PATH_API } from "services";
import axiosClient from "services/axiosClient";
import { IMovieDetails } from "types";
import { IApiSubtitle } from "types/api";
import catchAsync from "utils/catch-async";
import { sortSubtitle } from "utils/helper";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getEpisodeApi = async (req: NextApiRequest, res: NextApiResponse) => {
  let { id, category = 0, episode = 0 } = req.query;
  episode = Number(episode);
  if (req.method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const movieDetails: IMovieDetails = (
    await axiosClient.get(PATH_API.detail, {
      params: { id, category, episode },
    })
  ).data.data;
  if (!movieDetails) {
    const error = new ApiError(STATUS.NOT_FOUND, "Not found movie");
    return responseError(error, res);
  }
  let currentEpisode =
    movieDetails.episodeVo.findIndex((episodeVo) => episodeVo.id === episode) || 0;
  if (currentEpisode === -1) currentEpisode = 0;
  const { definitionList, subtitlingList } = movieDetails.episodeVo[currentEpisode];
  const convertQualityTextToNumber = (qualityList: IApiSubtitle[]) => {
    return qualityList
      .map((url, index) => ({
        quality: Number(definitionList[index].description.toLowerCase().replace("p", "")),
        url,
      }))
      .sort((a, b) => b.quality - a.quality);
  };
  const getEpisode = async (code: string) => {
    const params = {
      category,
      currentEpisode,
      contentId: id,
      episodeId: movieDetails.episodeVo[currentEpisode].id,
      definition: code,
    };
    return await axiosClient.get(PATH_API.media, { params });
  };
  const sources = await Promise.all(
    definitionList.map(async (quality: any) => (await getEpisode(quality.code)).data.data.mediaUrl)
  );
  const data = {
    ...movieDetails,
    currentEpisode,
    sources: convertQualityTextToNumber(sources),
    subtitles: sortSubtitle(subtitlingList),
  };
  const response = {
    message: `Get info episode ${currentEpisode + 1} of ${movieDetails.name} successfully!`,
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getEpisodeApi);
