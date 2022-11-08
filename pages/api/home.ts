import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import { PATH_API } from "services";
import axiosClient from "services/axiosClient";
import { IHomeTrending, IResponseHome } from "types";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getHomePageApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { page = 1 } = query;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const {
    page: currentPage,
    recommendItems,
    searchKeyWord,
  }: IResponseHome = (await axiosClient(PATH_API.home, { params: { page } })).data.data;
  const homeSections = recommendItems.filter(
    (section) => section.homeSectionType !== "BLOCK_GROUP" && section.homeSectionName !== ""
  );
  const trendings: IHomeTrending[] = (await axiosClient.get(PATH_API.trending)).data.data.list;
  const response = {
    message: "Get home successfully!",
    data: {
      page: currentPage,
      searchKeyWord,
      trendings,
      homeSections,
    },
  };
  responseSuccess(res, response);
};

export default catchAsync(getHomePageApi);
