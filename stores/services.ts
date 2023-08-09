import Service from "~/types/service";

export default defineStore("services", () => {
  const services = ref<Service[] | null>(null);
  const page = ref(0);
  const totalPages = ref(0);

  const { fetchServices } = useServices();

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
    coordinates,
    fetchServices: async () => {
      const response = await fetchServices();
      services.value = response.services;
      page.value = response.page;
      totalPages.value = response.totalPages;
    },
    getServiceByCoords,
  };
});
