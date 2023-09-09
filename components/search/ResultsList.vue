<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const { services } = storeToRefs(useServicesStore());
</script>

<template>
  <div
    :class="[
      services
        ? 'col-span-4 md:col-span-8 lg:col-span-6 xl:col-span-7 2xl:col-span-8'
        : 'col-span-full',
    ]"
  >
    <ol
      class="flex flex-wrap items-center justify-center gap-4"
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
