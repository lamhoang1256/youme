export interface ITopMovie {
  id: string;
  name: string;
  coverVerticalUrl: string;
  coverHorizontalUrl: string;
  area: string;
  category: string;
  score: string;
  tagList: { id: string; name: string }[];
}

export interface IBanner {
  id: string;
  name: string;
  coverHorizontalUrl: string;
  area: string;
  tagNameList: string[];
  tagList: { id: string; name: string }[];
  score: string;
  episodeCount: string;
}

export interface IMovieDetails {
  aliasName: string;
  areaNameList: string[];
  areaList: { id: number; name: string }[];
  collect: boolean;
  category: number;
  coverHorizontalUrl: string;
  coverHorizontalUrlJson: string;
  coverVerticalUrl: string;
  drameTypeVo: { drameName: string; drameType: string };
  episodeCount?: number;
  episodeRoomListVo: {
    category: number;
    episodeId: string;
    episodeName: string;
    number: number;
    roomId: string;
    seasonID: string;
    seasonName: string;
  };
  episodeVo: {
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
  }[];
  id: string;
  introduction: string;
  likeList: {
    areaList: [
      {
        id: number;
        name: string;
      }
    ];
    areaNameList: string[];
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    seriesNo: number;
    score: number;
    tagList: [
      {
        id: number;
        name: string;
      }
    ];
    tagNameList: string[];
    upImgUrl: string;
    upName: string;
    year: number;
  }[];
  name: string;
  nameJson: string;
  refList: {
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    seriesNo: number;
  }[];
  reserved: boolean;
  score: number;
  showSetName: boolean;
  starList: [];
  tagList: { id: number; name: string }[];
  length: number;
  tagNameList: string[];
  translateType: 1;
  upInfo: { upId: number; upImgUrl: string; upName: string };
  updateInfo?: any;
  year: number;
}
