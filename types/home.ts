export interface IBanners {
  id: number;
  imgUrl: string;
  isNeedLogin: boolean;
  jumpParam: string;
  jumpType: string;
  title: string;
}

export interface IPopular {
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
  bannerProportion?: any;
  blockGroupNum?: any;
  coverType?: any;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: IPopular[];
  refId?: any;
  refRedirectUrl: string;
}

export interface ILeaderBoard {
  cover: string;
  domainType: number;
  id: string;
  title: string;
}
