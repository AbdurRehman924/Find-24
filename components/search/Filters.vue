<script setup lang="ts">
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";

  const servicesStore = useServicesStore();

  const priceRange = ref<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  function handlePriceChange(range: { min: number; max: number }) {
    priceRange.value = range;
  }

  async function handleApplyFilter() {
    if (priceRange.value.min && priceRange.value.max) {
      await servicesStore.numericFacet({
        name: constants.PRICE_FACET,
        range: priceRange.value,
      });
    }
  }
</script>

<template>
  <div class="sticky top-2 col-span-2 hidden bg-penache lg:block">
    <div class="flex items-center justify-between">
      <h3 class="text-center font-semibold md:text-left">Filters</h3>
      <button class="text-xs text-dark_corduroy">Reset All</button>
    </div>
    <div>
      <SearchCategoryFilter />
      <div class="h-[0.5px] rounded-full bg-chinese-white"></div>
      <SearchPriceFilter
        @changed="handlePriceChange"
        @apply-filter="handleApplyFilter"
      />
      <div class="h-[0.5px] rounded-full bg-chinese-white"></div>
      <SearchRatingFilter />
    </div>
  </div>
</template>

<style scoped></style>
