import { SearchResults } from "algoliasearch-helper";
import Service from "~/types/service";
import constants from "~/constants";
import { Feature } from "types/mapbox";

export default defineStore("services", () => {
  // state
  const { $algoliaHelper } = useNuxtApp();

  const route = useRoute();

  const services = ref<Service[] | null>(null);
  const categoryFacets = ref<SearchResults.FacetValue[]>([]);
  const ratingFacets = ref<SearchResults.FacetValue[]>([]);
  const currentPopUpCoordinates = ref<{
    lat: number;
    lng: number;
  } | null>(null);
  const overAllMinPrice = ref<number>(0);
  const overAllMaxPrice = ref<number>(0);
  const page = ref<number>(0);
  const totalPages = ref<number>(0);

  const category = ref<string>("");
  const location = ref<Feature | null>(null);

  // actions
  function searchServices() {
    const filters = [];

    if (category.value) {
      filters.push(`category:${category.value}`);
    }

    if (location.value) {
      const { center } = location.value;
      $algoliaHelper.setQueryParameter(
        "aroundLatLng",
        `${center[1]},${center[0]}`,
      );
      $algoliaHelper.setQueryParameter(
        "aroundRadius",
        constants.MAX_AROUND_RADIUS,
      );
    } else {
      $algoliaHelper.setQueryParameter("aroundLatLng", "");
    }

    $algoliaHelper.setQueryParameter(
      "filters",
      filters.join(" AND "),
    );
    $algoliaHelper.search();
  }

  function resetCategory() {
    if (!category.value) return;

    category.value = "";
    searchServices();
  }

  function resetLocation() {
    if (!location.value) return;

    location.value = null;
    searchServices();
  }

  function setPage(page: number) {
    $algoliaHelper.setPage(page).search();
  }

  function nextPage() {
    if (page.value < totalPages.value) {
      setPage(page.value + 1);
    }
  }

  function previousPage() {
    if (page.value > 0) {
      setPage(page.value - 1);
    }
  }

  function toggleFacet(facetName: string, FacetValue: string) {
    $algoliaHelper
      .toggleFacetRefinement(facetName, FacetValue)
      .search();
  }

  function removeFacet(facetName: string) {
    $algoliaHelper
      .removeDisjunctiveFacetRefinement(facetName)
      .search();
  }

  function applyNumericFacet(
    facetName: string,
    range: { min: number; max: number },
  ) {
    $algoliaHelper
      .addNumericRefinement(facetName, ">=", range.min)
      .addNumericRefinement(facetName, "<=", range.max)
      .search();
  }

  function removeNumericFacet(facetName: string) {
    $algoliaHelper.removeNumericRefinement(facetName).search();
  }

  function removeAllFacets() {
    $algoliaHelper.clearRefinements().search();
  }

  function setCurrentPopUp(coordinates: {
    lat: number;
    lng: number;
  }) {
    currentPopUpCoordinates.value = coordinates;
  }

  // getters
  const minPrice = computed(() => {
    if (route.query.price__gte) {
      return parseInt(route.query.price__gte as string);
    }
    return overAllMinPrice.value;
  });

  const maxPrice = computed(() => {
    if (route.query.price__lte) {
      return parseInt(route.query.price__lte as string);
    }
    return overAllMaxPrice.value;
  });

  const coordinates = computed(() => {
    if (services.value) {
      return services.value.map((service) => {
        return {
          lat: service._geoloc.lat,
          lng: service._geoloc.lng,
        };
      });
    } else {
      return [];
    }
  });

  const currentPopUp = computed(() => {
    if (currentPopUpCoordinates.value && services.value) {
      return (
        services.value.find(
          (service) =>
            service._geoloc.lat ===
              currentPopUpCoordinates.value?.lat &&
            service._geoloc.lng ===
              currentPopUpCoordinates.value?.lng,
        ) || null
      );
    } else {
      return null;
    }
  });

  onMounted(() => {
    $algoliaHelper.search();
    $algoliaHelper.on("result", (result) => {
      services.value = result.results.hits;
      categoryFacets.value = result.results.getFacetValues(
        constants.CATEGORY_FACET,
        {},
      ) as SearchResults.FacetValue[];
      ratingFacets.value = result.results.getFacetValues(
        constants.RATING_FACET,
        { sortBy: ["name:asc"] },
      ) as SearchResults.FacetValue[];
      overAllMinPrice.value = result.results.getFacetStats(
        constants.PRICE_FACET,
      )?.min;
      overAllMaxPrice.value = result.results.getFacetStats(
        constants.PRICE_FACET,
      )?.max;
      page.value = result.results.page;
      totalPages.value = result.results.nbPages;
    });
  });

  return {
    searchServices,
    resetCategory,
    resetLocation,
    toggleFacet,
    removeFacet,
    applyNumericFacet,
    removeNumericFacet,
    removeAllFacets,
    setCurrentPopUp,
    setPage,
    nextPage,
    previousPage,
    category,
    location,
    services: computed(() => services.value),
    categoryFacets: computed(() => categoryFacets.value),
    ratingFacets: computed(() => ratingFacets.value),
    overAllMinPrice: computed(() => overAllMinPrice.value),
    overAllMaxPrice: computed(() => overAllMaxPrice.value),
    page: computed(() => page.value),
    totalPages: computed(() => totalPages.value),
    minPrice,
    maxPrice,
    coordinates,
    currentPopUp,
  };
});
