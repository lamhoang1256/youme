export const resizeImage = (url: string, width = 0, height = width) =>
  `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=outside`;
