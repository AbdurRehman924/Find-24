le
<script setup lang="ts">
  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  function handleClose() {
    emits("close");
  }
</script>
<template>
  <div class="absolute inset-0 z-10 bg-penache py-6">
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
      <SearchPriceFilter />
      <div
        class="absolute inset-x-4 bottom-10 flex items-center justify-between text-sm"
      >
        <button class="font-medium text-corduroy underline">
          Clear All
        </button>
        <button
          class="flex items-center gap-2 rounded-4xl bg-palma px-4 py-3.5 font-semibold text-white shadow-variant3 focus:bg-islamic-green"
        >
          <IconsFilterssmall />
          <span>Apply Filters</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
