import { SearchResults } from "algoliasearch-helper";
import { Feature } from "types/mapbox";
import { ServicesResponse } from "~/types/APIResponse";
import Service from "~/types/service";

export default defineStore("services", () => {
  const category = ref("");
  const location = ref<Feature | null>(null);
  const noServicesFound = ref(false);
  const services = ref<Service[] | null>(null);
  const _page = ref(0);
  const totalPages = ref(0);
  const overAllMinPrice = ref(0);
  const overAllMaxPrice = ref(0);
  const minPrice = ref(0);
  const maxPrice = ref(0);
  const categoryFacets = ref<SearchResults.FacetValue[] | null>(null);
  const ratingFacets = ref<SearchResults.FacetValue[] | null>(null);

  const {
    fetchServices: _fetchServices,
    applyFacet,
    removeFacet: _removeFacet,
    applyNumericFacet,
  } = useServices();

  function setState(response: ServicesResponse) {
    services.value = response.services;
    _page.value = response.page;
    totalPages.value = response.totalPages;
    overAllMinPrice.value = response.overAllMinPrice;
    overAllMaxPrice.value = response.overAllMaxPrice;
    minPrice.value = response.minPrice;
    maxPrice.value = response.maxPrice;
    categoryFacets.value = response.categoryFacets;
    ratingFacets.value = response.ratingFacets;
  }

  async function resetCategory() {
    category.value = "";
    await fetchServices();
  }

  async function resetLocation() {
    location.value = null;
    await fetchServices();
  }

  async function resetAll() {
    category.value = "";
    location.value = null;
    await fetchServices();
  }

  async function fetchServices(page = 0) {
    noServicesFound.value = false;

    const categoryValue = category.value || "";
    const locationValue = location.value
      ? {
          lat: location.value.center[1],
          lng: location.value.center[0],
        }
      : undefined;

    const response = await _fetchServices(
      page,
      categoryValue,
      locationValue,
    );

    if (response) {
      setState(response);
    } else {
      noServicesFound.value = true;
    }
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

  async function numericFacet(facet: {
    name: string;
    range: { min: number; max: number };
  }) {
    const response = await applyNumericFacet(facet);
    setState(response);
  }

  async function removeFacet(facetName: string, isNumeric = false) {
    const response = await _removeFacet(facetName, isNumeric);
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
    category,
    location,
    noServicesFound: computed(() => noServicesFound.value),
    services: computed(() => services.value),
    page: computed(() => _page.value),
    totalPages: computed(() => totalPages.value),
    overAllMaxPrice: computed(() => overAllMaxPrice.value),
    overAllMinPrice: computed(() => overAllMinPrice.value),
    minPrice: computed(() => minPrice.value),
    maxPrice: computed(() => maxPrice.value),
    categoryFacets: computed(() => categoryFacets.value),
    ratingFacets: computed(() => ratingFacets.value),
    coordinates,
    fetchServices,
    resetCategory,
    resetLocation,
    resetAll,
    getServiceByCoords,
    nextPage,
    prevPage,
    goToPage,
    toggleFacets,
    numericFacet,
    removeFacet,
  };
});
