export type API_Response<T> = {
  code: number;
  message: string;
  data: T;
  status: string;
};
