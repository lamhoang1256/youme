interface IObjectKeys {
  [key: string]: string | number;
}

export interface IFilters extends IObjectKeys {
  area: string;
  category: string;
  year: string;
  subtitles: string;
  order: string;
  params: string;
  sort: string;
  size: number;
}

export interface IGenres {
  id: number;
  name: string;
  params: string;
  screeningItems: {
    id: number;
    name: string;
    items: { name: string; params: string; screeningType: string }[];
  }[];
}
