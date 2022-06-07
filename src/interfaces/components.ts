export interface IMovieCard {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  title: string;
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
