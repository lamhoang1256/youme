export interface IQuality {
  quality: number;
  url: string;
}
export interface ISubtitle {
  language: string;
  lang: string;
  url: string;
  translateType: number;
}

export interface IEpisode {
  aliasName: string;
  areaList: {
    id: number;
    name: string;
  }[];
  areaNameList: string[];
  category: number;
  collect: boolean;
  contentTagResourceList: [];
  coverHorizontalUrl: string;
  coverHorizontalUrlJson: string;
  coverVerticalUrl: string;
  drameTypeVo: {
    drameName: string;
    drameType: string;
  };
  episodeCount: number;
  episodeRoomListVo: {
    category: number;
    episodeId: string;
    episodeName: string;
    number: number;
    roomId: string;
    seasonID: string;
    seasonName: string;
  };
  episodeVo: 16;
  id: string;
  introduction: string;
  likeList: {
    areaList: {
      id: number;
      name: string;
    }[];
    areaNameList: string[];
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo: {
      drameName: string;
      drameType: string;
    };
    id: string;
    name: string;
    score: number;
    tagList: {
      id: number;
      name: string;
    }[];
    tagNameList: string[];
    upImgUrl: string;
    upName: string;
    year: number;
  }[];
  name: string;
  nameJson: string;
  refList: [];
  reserved: boolean;
  score: number;
  seriesNo: null;
  showSetName: boolean;
  starList: {
    image: string;
    localName: string;
    role: string;
    roleName: string;
    starId: number;
  }[];
  tagList: {
    id: number;
    name: string;
  }[];
  tagNameList: string[];
  translateType: number;
  upInfo: {
    upId: number;
    upImgUrl: string;
    upName: string;
  };
  updateInfo: {
    updatePeriod: string;
    updateStatus: number;
  };
  year: 2022;
  sources: {
    quality: number;
    url: string;
  }[];
  subtitles: {
    language: string;
    lang: string;
    url: string;
  }[];
}
