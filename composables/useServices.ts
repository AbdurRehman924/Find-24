import { SearchResults } from "algoliasearch-helper";
import { ServicesResponse } from "~/types/APIResponse";

export const useServices = () => {
  async function fetchServices(page = 0) {
    return $fetch<ServicesResponse>("/api/services", {
      method: "POST",
      body: { page },
    });
  }

  async function applyFacet(facet: { name: string; value: string }) {
    return $fetch<ServicesResponse>("/api/services", {
      method: "POST",
      body: { facet },
    });
  }

  return { fetchServices, applyFacet };
};
