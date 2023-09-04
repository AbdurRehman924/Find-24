<script setup lang="ts">
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";

  const servicesStore = useServicesStore();

  const { ratingFacets, toggleFacet, removeFacet } = useServices();

  function handleCategoryFilter(rating: string) {
    toggleFacet(constants.RATING_FACET, rating);
  }

  async function handleReset() {
    removeFacet(constants.RATING_FACET);
  }
</script>

<template>
  <div class="py-6 text-sm text-dark_corduroy">
    <div class="mb-5 flex justify-between">
      <h4 class="font-medium text-dark-jungle-green">Rating</h4>
      <button class="text-xs" @click="handleReset">Reset</button>
    </div>
    <ul class="flex flex-wrap gap-3">
      <li
        v-for="facet in ratingFacets"
        class="flex items-center gap-3"
      >
        <button
          class="flex items-center gap-1 rounded-[40px] border-0.5 border-chinese-white px-4 py-2"
          :class="[
            facet.isRefined
              ? 'bg-palma text-white'
              : 'text-dark_corduroy',
          ]"
          @click="handleCategoryFilter(facet.name)"
        >
          <IconsStar />
          <span>{{ facet.name }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
