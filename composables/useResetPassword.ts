import { API_Response } from "~/types/api";

const setNewPassword = async (password: string, token: string) => {
  const { data, error } = await useFetch("/auth/resetPassword", {
    method: "POST",
    body: {
      password,
      token,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });
  return { data, error };
};
const sendResetCode = async (email: string) => {
  const { data, error } = await useFetch<
    API_Response<{ token: string }>
  >("/auth/forgetPassword", {
    method: "POST",
    body: {
      email,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });
  return { data, error };
};
const verifyResetCode = async (code: string) => {
  const { data, error } = await useFetch(
    "/auth/verify/reset/passwordCode",
    {
      method: "POST",
      body: {
        code,
      },
      baseURL: useRuntimeConfig().public.baseURL,
    },
  );
  return { data, error };
};
export const useResetPassword = () => {
  return {
    setNewPassword,
    sendResetCode,
    verifyResetCode,
  };
};
