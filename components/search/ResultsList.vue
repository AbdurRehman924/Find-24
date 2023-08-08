<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { services } = storeToRefs(servicesStore);
  const loading = ref(true);

  onMounted(async () => {
    await servicesStore.fetchServices();
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
