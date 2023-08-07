import Service from "~/types/service";

export const useServices = () => {
  function fetchServices() {
    return useFetch<Service[]>("/api/services");
  }

  return { fetchServices };
};
