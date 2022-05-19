export const resizeImage = (url: string, width = "", height = "") =>
  `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=outside`;
