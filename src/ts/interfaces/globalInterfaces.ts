export interface StoriesInt {
  id: string;
  src: string;
  user: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface PostData {
  user: User;
  desc: string;
  url: string;
  saved: boolean;
  liked: boolean;
}
