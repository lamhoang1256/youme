import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getTopSearchesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const source = await axiosClient.get("search/v1/searchLeaderboard");
  const data = source.data.data.list;
  const response = {
    message: "Get top searches successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getTopSearchesApi);
