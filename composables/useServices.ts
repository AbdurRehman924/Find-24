import Service from "~/types/service";

export const useServices = () => {
  async function fetchServices() {
    return $fetch<Service[]>("/api/services");
  }

  return { fetchServices };
};
