interface IObjectKeys {
  [key: string]: string | number;
}

export interface Filters extends IObjectKeys {
  area: string;
  category: string;
  year: string;
  subtitles: string;
  order: string;
  params: string;
  sort: string;
  size: number;
}

export interface IExploreCard {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
  sort: string;
}
