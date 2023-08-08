import Service from "~/types/service";

export default defineStore("services", () => {
  const services = ref<Service[] | null>(null);

  const { fetchServices } = useServices();

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
      services.value = await fetchServices();
    },
  };
});
