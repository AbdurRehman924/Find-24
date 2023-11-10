import { API_Response } from "types/api";
import { useUserStore } from "~/stores/userStore";
import { Category } from "~/types/category";

export const useCategories = () => {
  const { baseURL } = useRuntimeConfig().public;
  const { authToken } = useUserStore();

  function getCategories(country = "") {
    return useFetchWrapper<API_Response<Category[]>>(
      "/user/categories",
      {
        Headers: {
          Authorization: authToken,
        },
        params: {
          country,
        },
        baseURL,
      },
    );
  }

  return { getCategories };
};
