import { ServicesResponse } from "~/types/APIResponse";

export const useServices = () => {
  async function fetchServices({ page } = { page: 0 }) {
    return $fetch<ServicesResponse>("/api/services", {
      method: "POST",
      body: { page },
    });
  }

  return { fetchServices };
};
