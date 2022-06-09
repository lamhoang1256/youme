import axios from "axios";
import queryString from "query-string";

const language = localStorage.getItem("language") || "en";
const axiosClient = axios.create({
  headers: {
    lang: language,
    versioncode: 11,
    clienttype: "ios_jike_default",
    deviceid: Math.random().toString(36).slice(-8),
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);

export default axiosClient;
