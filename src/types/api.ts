export interface IMediaParams {
  category: number;
  contentId: number;
  episodeId: number;
  definition?: string;
}

export interface IFilterByCategory {
  area?: string;
  category?: string;
  order?: string;
  params?: string;
  size?: number;
  sort?: string;
  subtitles?: string;
  year?: string;
}
