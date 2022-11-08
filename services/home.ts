import axiosClient from "./axiosClient";

export const getHome = async (page = 0): Promise<any> => {
  try {
    const data = (
      await axiosClient.get("homePage/getHome", {
        params: {
          page,
        },
      })
    ).data.data.recommendItems.filter((section: any) => section.homeSectionType !== "BLOCK_GROUP");
    if (!data) {
      return [];
    }
    return data;
  } catch (error) {
    return [];
  }
};
