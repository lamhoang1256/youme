import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import { ITopMovie } from "types";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

interface ILeardBoard {
  cover: string;
  domainType: number;
  id: string;
  title: string;
}

const getTopMoviesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const source: ILeardBoard[] = (await axiosClient.get("/search/v1/searchLeaderboard")).data.data
    .list;
  const movies = await Promise.all(
    source.map(async (movie) => {
      const params = { id: movie.id, category: movie.domainType.toString() };
      return (
        await axiosClient.get("movieDrama/get", {
          params,
        })
      ).data.data;
    })
  );
  const data = movies.map((movie) => ({
    id: movie.id,
    name: movie.name,
    coverVerticalUrl: movie.coverVerticalUrl,
    coverHorizontalUrl: movie.coverHorizontalUrl,
    area: movie.areaList[0].name,
    category: movie.tagNameList[0],
    score: movie.score,
    tagList: movie.tagList,
  }));
  const response = {
    message: "Get top movies successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getTopMoviesApi);
