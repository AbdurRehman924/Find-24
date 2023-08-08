<script setup lang="ts">
  import Service from "~/types/service";

  const { fetchServices } = useServices();
  const loading = ref(true);

  const services = ref<Service[]>([]);

  onMounted(async () => {
    services.value = await fetchServices();
    loading.value = false;
  });
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-center gap-6"
    v-if="!loading"
  >
    <div v-for="service in services" :key="service.id">
      <SearchResultCard :service="service" />
    </div>
  </div>

  <div
    v-else
    class="flex flex-wrap items-center justify-center gap-6"
  >
    <div v-for="i in 10"><SearchResultCardSkeleton /></div>
  </div>
</template>

<style scoped></style>
