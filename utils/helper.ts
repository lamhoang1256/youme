import { ISubtitle } from "types";

export const sortSubtitle = (subtitles: ISubtitle[]) => {
  return subtitles
    .map((sub: any) => ({
      language: `${sub.language}${sub.translateType ? " (Auto)" : ""}`,
      lang: sub.languageAbbr,
      url: `https://convert-srt-to-vtt.vercel.app/?url=${sub.subtitlingUrl}`,
      translateType: sub.translateType,
    }))
    .reduce((acc: any, element: any) => {
      if (element.lang === "en") {
        return [element, ...acc];
      }
      return [...acc, element];
    }, [])
    .reduce((acc: any, element: any) => {
      if (element.lang === "vi") {
        return [element, ...acc];
      }
      return [...acc, element];
    }, []);
};
