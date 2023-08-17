import { API_Response } from "~~/types/api";

export const useLogin = async (email: string, password: string) => {
  const { data, error } = await useFetch<
    API_Response<{ token: string; refreshToken: string }>
  >("/auth/signin", {
    method: "POST",
    body: {
      email,
      password,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });
  return { data, error };
};
