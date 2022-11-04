export interface IHomeTrending {
  cover: string;
  domainType: number;
  id: string;
  title: string;
}

export interface IHomePopular {
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
}

export interface IHomeSection {
  bannerProportion?: number | null;
  blockGroupNum?: any;
  coverType?: any;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: IHomePopular[];
  refId?: any;
  refRedirectUrl: string;
}

export interface ILeaderBoard {
  id: string;
  cover: string;
  domainType: number;
  title: string;
}

export interface IResponseHome {
  page: number;
  recommendItems: IHomeSection[];
  searchKeyWord: string;
}
