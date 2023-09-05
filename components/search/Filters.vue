<script setup lang="ts">
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";

  const priceRange = ref<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const { applyNumericFacet, removeAllFacets } = useServicesStore();

  function handlePriceChange(range: { min: number; max: number }) {
    priceRange.value = range;
  }

  async function handleApplyFilter() {
    if (priceRange.value.min && priceRange.value.max) {
      applyNumericFacet(constants.PRICE_FACET, priceRange.value);
    }
  }
</script>

<template>
  <div class="sticky top-2 col-span-2 hidden bg-penache lg:block">
    <div class="flex items-center justify-between">
      <h3 class="text-center font-semibold md:text-left">Filters</h3>
      <button
        class="text-xs text-dark_corduroy"
        @click="removeAllFacets"
      >
        Reset All
      </button>
    </div>
    <div class="divide-y divide-chinese-white">
      <SearchCategoryFilter />
      <SearchPriceFilter
        @changed="handlePriceChange"
        @apply-filter="handleApplyFilter"
      />
      <SearchRatingFilter />
    </div>
  </div>
</template>

<style scoped></style>
