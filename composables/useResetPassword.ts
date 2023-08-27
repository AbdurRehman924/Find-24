export const useResetPassword = async (password: string, token: string) => {
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
