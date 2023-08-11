import { SearchResults } from "algoliasearch-helper";
import { ServicesResponse } from "~/types/APIResponse";
import Service from "~/types/service";

export default defineStore("services", () => {
  const services = ref<Service[] | null>(null);
  const _page = ref(0);
  const totalPages = ref(0);
  const minPrice = ref(0);
  const maxPrice = ref(0);
  const categoryFacets = ref<SearchResults.FacetValue[] | null>(null);
  const ratingFacets = ref<SearchResults.FacetValue[] | null>(null);

  const { fetchServices: _fetchServices, applyFacet } = useServices();

  function setState(response: ServicesResponse) {
    services.value = response.services;
    _page.value = response.page;
    totalPages.value = response.totalPages;
    minPrice.value = response.minPrice;
    maxPrice.value = response.maxPrice;
    categoryFacets.value = response.categoryFacets;
    ratingFacets.value = response.ratingFacets;
  }

  async function fetchServices(page = 0) {
    const response = await _fetchServices(page);
    setState(response);
  }

  function prevPage() {
    if (_page.value > 0) {
      return fetchServices(_page.value - 1);
    }
  }

  function nextPage() {
    if (_page.value < totalPages.value) {
      return fetchServices(_page.value + 1);
    }
  }

  function goToPage(page: number) {
    return fetchServices(page);
  }

  async function toggleFacets(facet: {
    name: string;
    value: string;
  }) {
    const response = await applyFacet(facet);
    setState(response);
  }

  function getServiceByCoords({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) {
    if (services.value) {
      return services.value.find((service) => {
        return (
          service._geoloc.lat === lat && service._geoloc.lng === lng
        );
      });
    }
    return null;
  }

  const coordinates = computed(() => {
    if (services.value) {
      return services.value.map((service) => service._geoloc);
    }
    return [];
  });

  return {
    services: computed(() => services.value),
    page: computed(() => _page.value),
    totalPages: computed(() => totalPages.value),
    minPrice: computed(() => minPrice.value),
    maxPrice: computed(() => maxPrice.value),
    categoryFacets: computed(() => categoryFacets.value),
    ratingFacets: computed(() => ratingFacets.value),
    coordinates,
    fetchServices,
    getServiceByCoords,
    nextPage,
    prevPage,
    goToPage,
    toggleFacets,
  };
});
