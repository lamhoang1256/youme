export interface ICommunity {
  category: number;
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  duration: number;
  id: string;
  introduction: string;
  like: boolean;
  likeCount: number;
  mediaInfo: {
    definitionList: { code: string; description: string; fullDescription: string }[];
    id: number;
    resourceType: number;
    subtitlingList: any;
  };
  mediaInfoUrl: {
    businessType: number;
    currentDefinition: string;
    episodeId: string;
    mediaUrl: string;
    totalDuration: number;
  };
  refList: {
    category: 0;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo: any;
    id: string;
    name: string;
    score: number;
  }[];
  name: string;
  upInfo: {
    enable: boolean;
    upId: number;
    upImgUrl: string;
    upName: string;
  };
}
