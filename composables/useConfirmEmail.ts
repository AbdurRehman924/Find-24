import { API_Response } from "~~/types/api";

export const useConfirmEmail = async (token: string) => {
  const { data, error } = await useFetch("/auth/verify/email", {
    method: "POST",
    body: {
      token,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });
  return { data, error };
};