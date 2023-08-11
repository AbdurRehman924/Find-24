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
    <div>$ {{ minPrice }} $ {{ maxPrice }}</div>
  </div>
</template>

<style scoped></style>
