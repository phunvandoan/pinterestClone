export type ItemType = {
  id: number;
  media: string;
  width: number;
  height: number;
};

export type CommentType = {
  id: number;
  description: string;
  user: User;
  createdAt: string;
};

export type User = {
  img: string;
  displayName: string;
  name: string;
};
