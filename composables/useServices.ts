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

  async function removeFacet(facetName: string) {
    return $fetch<ServicesResponse>("/api/services", {
      method: "POST",
      body: { facetName, resetSingleFacet: true },
    });
  }

  async function applyNumericFacets(facet: {
    name: string;
    range: { min: number; max: number };
  }) {
    return $fetch<ServicesResponse>("/api/services", {
      method: "POST",
      body: { facet, isNumeric: true },
    });
  }

  return {
    fetchServices,
    applyFacet,
    removeFacet,
    applyNumericFacets,
  };
};
