export interface ICommunity {
  category: number;
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  duration: number;
  id: string;
  introduction: string;
  like: boolean;
  likeCount: number;
  mediaUrl: {
    businessType: number;
    currentDefinition: string;
    episodeId: string;
    mediaUrl: string;
    totalDuration: number;
  };
  mediaInfo: {
    definitionList: [
      {
        code: string;
        description: string;
        fullDescription: string;
      }[],
    ];
    id: number;
    resourceType: number;
    subtitlingList: [];
  };
  name: string;
  refList: [
    {
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
      tagList: [
        {
          id: number;
          name: string;
        }[],
      ];
      year: number;
    },
  ];
  upInfo: {
    enable: boolean;
    upId: number;
    upImgUrl: string;
    upName: string;
  };
}
