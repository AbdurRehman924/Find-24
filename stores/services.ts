import Service from "~/types/service";

export default defineStore("services", () => {
  const services = ref<Service[] | null>(null);
  const page = ref(0);
  const totalPages = ref(0);

  const { fetchServices: _fetchServices } = useServices();

  async function fetchServices({ page: number } = { page: 0 }) {
    services.value = null;
    const response = await _fetchServices({ page: number });
    services.value = response.services;
    page.value = response.page;
    totalPages.value = response.totalPages;
  }

  function prevPage() {
    if (page.value > 0) {
      return fetchServices({ page: page.value - 1 });
    }
  }

  function nextPage() {
    if (page.value < totalPages.value) {
      return fetchServices({ page: page.value + 1 });
    }
  }

  function goToPage(page: number) {
    return fetchServices({ page });
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
    page: computed(() => page.value),
    totalPages: computed(() => totalPages.value),
    coordinates,
    fetchServices,
    getServiceByCoords,
    nextPage,
    prevPage,
    goToPage,
  };
});
