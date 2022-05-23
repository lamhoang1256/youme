export interface IMovieMedia {
  businessType: number;
  currentDefinition: string;
  episodeId: string;
  mediaUrl: "";
  totalDuration: number;
  qualityDesc: { code: string; description: string; fullDescription: string };
}

export interface IMovieBeingWatched {
  id: number;
  definitionList: {
    code: string;
    description: string;
    fullDescription: string;
  }[];
  name: string;
  nameJson: string;
  resourceType: number;
  seriesNo: number;
  subtitlingList: {
    language: string;
    languageAbbr: string;
    subtitlingUrl: string;
    translateType: number;
  }[];
  totalTime: number;
  vid: string;
}
