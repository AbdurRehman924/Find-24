<script setup lang="ts">
  import useServicesStore from "~/stores/services";

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

  function handlePriceChange(range: { min: number; max: number }) {
    priceRange.value = range;
  }

  async function handleApplyFilters() {
    await servicesStore.numericFacet({
      name: "charges",
      range: priceRange.value,
    });
    emits("close");
  }
</script>
<template>
  <div class="absolute inset-x-0 z-10 min-h-screen bg-penache py-6">
    <button class="absolute left-6" @click="handleClose">
      <IconsCross />
    </button>
    <h3
      class="border-b-0.5 border-chinese-white pb-6 text-center font-semibold"
    >
      Filters
    </h3>
    <div class="px-4">
      <SearchCategoryFilter />
      <SearchRatingFilter />
      <SearchPriceFilter @changed="handlePriceChange" />
      <div class="flex items-center justify-between text-sm">
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
