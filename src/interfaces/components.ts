export interface IMovieList {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
}

export interface IComment {
  avatar: string;
  content: string;
  email: string;
  userId: string;
  username: string;
  like: number;
  dislike: number;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}
