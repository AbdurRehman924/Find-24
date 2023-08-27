import { API_Response } from "~/types/api";

export const useFindAccount = async (email: string) => {
  const { data, error } = await useFetch<API_Response<{ token: string }>>(
    "/auth/forgetPassword",
    {
      method: "POST",
      body: {
        email,
      },
      baseURL: useRuntimeConfig().public.baseURL,
    }
  );
  return { data, error };
};
