import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    lang: "en",
    versioncode: 11,
    clienttype: "ios_jike_default",
  },
});

export default axiosClient;
