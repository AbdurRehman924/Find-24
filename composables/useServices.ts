import { ServicesResponse } from "~/types/APIResponse";

export const useServices = () => {
  async function fetchServices() {
    return $fetch<ServicesResponse>("/api/services");
  }

  return { fetchServices };
};
