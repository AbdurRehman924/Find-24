import { User } from "~~/types/user";
import { API_Response } from "~~/types/api";

export const useGetUserData = async () => {
  let { data, error } = await useFetchWrapper<API_Response<User>>("/auth/me", {
    method: "GET",
  });
  return { data, error };
};
export const useUpdateUserData = async (data: Partial<User>) => {
  let { data: res, error } = await useFetchWrapper<API_Response<User>>(
    "/auth/profile",
    {
      method: "PUT",
      body: {
        ...data,
      },
    }
  );
  return { res, error };
};
