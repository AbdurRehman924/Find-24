<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { categoryFacets } = storeToRefs(servicesStore);

  const maxFacets = ref(4);
  const showMore = computed(
    () => maxFacets.value != categoryFacets.value?.length,
  );

  function handleShowMore() {
    maxFacets.value = categoryFacets.value?.length ?? maxFacets.value;
  }

  function handleShowLess() {
    maxFacets.value = 4;
  }
</script>

<template>
  <div class="flex flex-col gap-5 py-6 text-sm text-dark_corduroy">
    <h4 class="font-medium text-dark-jungle-green">Service Type</h4>
    <div
      v-for="facet in categoryFacets?.slice(0, maxFacets)"
      class="flex items-center gap-3"
    >
      <input
        type="checkbox"
        :id="facet.name"
        class="h-6 w-6 rounded border border-chinese-white text-palma"
      />
      <label :for="facet.name" class="grow">
        <span>{{ facet.name }}</span>
        <span class="float-right">{{ facet.count }}</span>
      </label>
    </div>
    <button
      v-show="showMore"
      class="max-w-fit underline"
      @click="handleShowMore"
    >
      Show more
    </button>
    <button
      v-show="!showMore"
      class="max-w-fit underline"
      @click="handleShowLess"
    >
      Show less
    </button>
  </div>
</template>

<style scoped></style>
