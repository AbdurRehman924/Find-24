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
  <div
    class="col-span-8 md:col-span-6 xl:col-span-4"
    :class="{ 'xl:col-span-8': !services }"
  >
    <ol
      class="flex flex-wrap items-center justify-center gap-8"
      v-if="services"
    >
      <li v-for="service in services" :key="service.id">
        <SearchResultCard :service="service" v-show="service" />
      </li>
    </ol>
    <SearchPagination v-show="services" />
    <div
      v-if="!services"
      class="flex flex-wrap items-center justify-center gap-6"
    >
      <div v-for="i in 10"><SearchResultCardSkeleton /></div>
    </div>
  </div>
</template>

<style scoped></style>
