import { newUser } from "~/types/user";
import { API_Response } from "~~/types/api";

type signupResponse = Omit<API_Response<null>, "data">;

export const useSignup = async (newUser: newUser, redirect: string) => {
  const route = useRoute();
  const { data, error } = await useFetch<signupResponse>("/auth/signup", {
    method: "POST",
    body: {
      ...newUser,
      returnUrl: redirect,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });
  return { data, error };
};
