export type Category = {
  data: {
    _id: string;
    title: string;
  };
  children: Category[];
};
