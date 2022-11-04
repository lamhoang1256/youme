const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://cinemax-eta.vercel.app";
export const PATH_API = {
  home: "homePage/getHome",
  trending: "search/v1/searchLeaderboard",
};
