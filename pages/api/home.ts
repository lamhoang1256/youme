import { STATUS } from "constants/status";
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "services/axiosClient";
import { IHomeSection } from "types";
import catchAsync from "utils/catch-async";
import { ApiError, responseError, responseSuccess } from "utils/response";

const getHomePageApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { page = 0 } = query;
  if (method !== "GET") {
    const error = new ApiError(STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
    return responseError(error, res);
  }
  const source = await axiosClient.get("homePage/getHome", {
    params: { page },
  });
  const data = source.data.data.recommendItems.filter(
    ({ homeSectionType, homeSectionName }: IHomeSection) =>
      homeSectionType !== "BLOCK_GROUP" && homeSectionName !== ""
  );
  const response = {
    message: "Get home successfully !",
    data,
  };
  responseSuccess(res, response);
};

export default catchAsync(getHomePageApi);
