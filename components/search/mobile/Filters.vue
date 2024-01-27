<script setup lang="ts">
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";
  import { storeToRefs } from "pinia";

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  const servicesStore = useServicesStore();

  function handleClose() {
    emits("close");
  }

  const priceRange = ref<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const { categoryFacets } = storeToRefs(servicesStore);

  function handlePriceChange(range: { min: number; max: number }) {
    priceRange.value = range;
  }

  function handleApplyFilters() {
    if (priceRange.value.min && priceRange.value.max) {
      servicesStore.applyNumericFacet(
        constants.PRICE_FACET,
        priceRange.value,
      );
      pushPriceQuery(priceRange.value.min, priceRange.value.max);
    }
    emits("close");
  }
</script>
<template>
  <div class="fixed inset-x-0 z-10 min-h-[100dvh] bg-penache pt-6">
    <button class="absolute left-6" @click="handleClose">
      <IconsCross />
    </button>
    <h3
      class="border-b-0.5 border-chinese-white pb-6 text-center font-semibold"
    >
      Filters
    </h3>
    <div class="px-4">
      <div class="divide-y divide-chinese-white">
        <SearchCategoryFilter />
        <SearchPriceFilter @changed="handlePriceChange" />
        <SearchRatingFilter />
      </div>
      <div class="flex items-center justify-between py-6 text-sm">
        <button class="font-medium text-corduroy underline">
          Clear All
        </button>
        <button
          class="flex items-center gap-2 rounded-4xl bg-palma px-4 py-3.5 font-semibold text-white shadow-variant3 focus:bg-islamic-green"
          @click="handleApplyFilters"
        >
          <IconsFilterssmall />
          <span>Apply Filters</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
