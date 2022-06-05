export interface IMovieList {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
}

export interface IComment {
  uid: string;
  avatar: string;
  content: string;
  email: string;
  userId: string;
  username: string;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}
