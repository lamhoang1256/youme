import axios from "axios";
import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";
import { fetchMovieDetails } from "./movie";

interface IResponseBanner {
  id: number;
  imgUrl: string;
  isNeedLogin: boolean;
  jumpParam: string;
  jumpType: string;
  title: string;
}

const getBannerApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const source: IResponseBanner[] = (
    await axios.get("https://ga-mobile-api.loklok.tv/cms/web/pc/homePage/banners", {
      headers: {
        lang: "en",
      },
    })
  ).data.data;
  console.log("source: ", source);
  const banners = await Promise.all(
    source.map(async (movie) => {
      const params = { id: movie.jumpParam, category: movie.jumpType === "DRAMA" ? "1" : "0" };
      return await fetchMovieDetails(params);
    })
  );
  const data = banners
    .filter((movie) => movie)
    .map((banner) => ({
      id: banner.id,
      name: banner.name,
      coverHorizontalUrl: banner.coverHorizontalUrl,
      area: banner.areaList[0].name,
      tagNameList: banner.tagNameList,
      tagList: banner.tagList,
      score: banner.score,
      episodeCount: banner.episodeCount,
    }));
  const response = {
    message: "Get banner successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getBannerApi);
