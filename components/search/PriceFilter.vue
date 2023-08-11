<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { minPrice, maxPrice } = storeToRefs(servicesStore);
</script>

<template>
  <div class="py-6 text-sm text-dark_corduroy">
    <h4 class="mb-5 font-medium text-dark-jungle-green">
      Price Range
    </h4>
    <div>
      <div class="h-1 rounded-2xl bg-chinese-white"></div>
      <div class="mt-5 flex justify-between">
        <span>$ {{ minPrice }}</span> <span>$ {{ maxPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
