export const useResendVerficationEmail = async (
  perviousToken: string,
) => {
  const { data, error } = await useFetch(
    "/auth/resend/verify/email",
    {
      method: "POST",
      body: {
        token: perviousToken,
      },
      baseURL: useRuntimeConfig().public.baseURL,
    },
  );
  return { data, error };
};
