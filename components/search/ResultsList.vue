<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { services } = storeToRefs(servicesStore);

  onMounted(async () => {
    await servicesStore.fetchServices();
  });
</script>

<template>
  <div>
    <div
      class="flex flex-wrap items-center justify-center gap-6"
      v-if="services"
    >
      <div v-for="service in services" :key="service.id">
        <SearchResultCard :service="service" v-show="service" />
      </div>
    </div>
    <SearchPagination v-show="services" />
  </div>

  <div
    v-if="!services"
    class="flex flex-wrap items-center justify-center gap-6"
  >
    <div v-for="i in 10"><SearchResultCardSkeleton /></div>
  </div>
</template>

<style scoped></style>
