import { useUserStore } from "~/stores/userStore";

export const useProvideServices = () => {
  const { baseURL } = useRuntimeConfig().public;
  const { authToken } = useUserStore();

  function onBoardServices({
    categoryId,
    experienceLevel,
    description,
  }: {
    categoryId: string;
    experienceLevel: string;
    description: string;
  }) {
    return useFetchWrapper("/user/onboardingServices", {
      method: "POST",
      baseURL,
      Headers: {
        Authorization: authToken,
      },
      body: {
        categoryId,
        experienceLevel,
        description,
      },
    });
  }

  function uploadDocuments(documents: FormData) {
    return useFetchWrapper("/user/upload/provider/documents", {
      method: "PUT",
      baseURL,
      Headers: {
        Authorization: authToken,
      },
      body: documents,
    });
  }

  return { onBoardServices, uploadDocuments };
};
