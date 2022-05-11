export interface HomeSection {
  bannerProportion?: any;
  blockGroupNum?: any;
  coverType?: any;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: {
    category: number;
    contentType: string;
    id: number;
    imageUrl: string;
    jumpAddress: string;
    jumpType: string;
    needLogin: boolean;
    resourceNum: number;
    resourceStatus: number;
    showMark: boolean;
    title: string;
  }[];
  refId?: any;
  refRedirectUrl: string;
}

export interface MovieDetail {
  aliasName: string;
  areaList: { id: number; name: string }[];
  areaNameList: string[];
  category: number;
  collect: boolean;
  coverHorizontalUrl: string;
  coverHorizontalUrlJson: string;
  coverVerticalUrl: string;
  drameTypeVo: { drameName: string; drameType: string };
  episodeCount?: any;
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
  }[];
  subtitlingList: {
    language: string;
    languageAbbr: string;
    subtitlingUrl: string;
    translateType: number;
  }[];
  id: string;
  introduction: string;
  likeList: {
    areaList: [
      {
        id: number;
        name: string;
      },
    ];
    areaNameList: string[];
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    score: number;
    tagList: [
      {
        id: number;
        name: string;
      },
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
  seriesNo: number;
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

export interface LeaderBoard {
  cover: string;
  domainType: number;
  id: string;
  title: string;
}
