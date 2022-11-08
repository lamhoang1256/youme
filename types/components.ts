export interface IMovieCard {
  id: string;
  title: string;
  domainType: number;
  coverVerticalUrl: string;
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
