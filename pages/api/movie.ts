import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import { IQuery } from "types";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getMovieDetailsPageApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const data = await fetchMovieDetails(query);
  if (!data) {
    const error = new ApiError(STATUS.NOT_FOUND, "Not found movie");
    return responseError(error, res);
  }
  const response = {
    message: "Get movie details successfully !",
    data: data,
  };
  responseSuccess(res, response);
};

export const fetchMovieDetails = async (query: Partial<IQuery>) => {
  const response = await axiosClient.get("movieDrama/get", {
    params: query,
  });
  return response.data.data;
};

export default catchAsync(getMovieDetailsPageApi);
