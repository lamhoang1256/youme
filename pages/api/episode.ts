import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import { IQuality } from "types";
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
  const movieDetails = (
    await axiosClient.get("movieDrama/get", {
      params: { id, category },
    })
  ).data.data;
  if (!movieDetails) {
    const error = new ApiError(STATUS.NOT_FOUND, "Not found movie");
    return responseError(error, res);
  }
  console.log("movieDetails: ", movieDetails);
  const { definitionList, subtitlingList } = movieDetails.episodeVo[episode];
  const convertQualityTextToNumber = (qualityList: any[]) => {
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
      contentId: id,
      episodeId: movieDetails.episodeVo[episode as string].id,
      definition: code,
    };
    return await axiosClient.get("media/previewInfo", { params });
  };
  const sources = await Promise.all(
    definitionList.map(async (quality: any) => (await getEpisode(quality.code)).data.data.mediaUrl)
  );
  const data = {
    ...movieDetails,
    episodeVo: movieDetails.episodeVo.length,
    sources: convertQualityTextToNumber(sources),
    subtitles: sortSubtitle(subtitlingList),
  };
  const response = {
    message: "Get episode successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getEpisodeApi);
