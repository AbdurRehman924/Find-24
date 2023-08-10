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

  function handleCategoryFilter(categoryValue: string) {
    servicesStore.toggleCategoryFacets({
      name: "category",
      value: categoryValue,
    });
  }
</script>

<template>
  <div class="py-6 text-sm text-dark_corduroy">
    <h4 class="mb-5 font-medium text-dark-jungle-green">
      Service Type
    </h4>
    <ul class="flex flex-col gap-5">
      <li
        v-for="facet in categoryFacets?.slice(0, maxFacets)"
        class="flex items-center gap-3"
      >
        <input
          type="checkbox"
          :id="facet.name"
          class="h-6 w-6 rounded border border-chinese-white text-palma"
          @change="handleCategoryFilter(facet.name)"
          v-model="facet.isRefined"
        />
        <label :for="facet.name" class="grow">
          <span>{{ facet.name }}</span>
          <span class="float-right">{{ facet.count }}</span>
        </label>
      </li>
    </ul>
    <button
      v-show="showMore"
      class="mt-5 max-w-fit underline"
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
