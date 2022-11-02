import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getSearchKeywordsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { keyword, size = 10 } = query;
  if (method !== "POST") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const source = await axiosClient.post(`search/searchLenovo`, {
    searchKeyWord: keyword,
    size,
  });
  const data = source.data.data.searchResults;
  const response = {
    message: "Get search keywords successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getSearchKeywordsApi);
