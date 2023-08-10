<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { ratingFacets } = storeToRefs(servicesStore);

  function handleCategoryFilter(rating: string) {
    servicesStore.toggleCategoryFacets({
      name: "rating",
      value: rating,
    });
  }
</script>

<template>
  <div class="py-6 text-sm text-dark_corduroy">
    <h4 class="mb-5 font-medium text-dark-jungle-green">Rating</h4>
    <ul class="flex gap-3">
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
