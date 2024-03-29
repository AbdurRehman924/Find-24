<script setup lang="ts">
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";
  import { storeToRefs } from "pinia";

  const router = useRouter();
  const route = useRoute();

  const servicesStore = useServicesStore();
  const { toggleFacet, removeFacet } = servicesStore;
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
    if (route.query.category?.includes(categoryValue)) {
      const query = route.query.category as string;
      const newQuery =
        query
          ?.split("|")
          .filter((category) => category !== categoryValue)
          .join("|") || undefined;
      pushCategoryQuery(newQuery);
    } else if (route.query.category) {
      pushCategoryQuery(`${route.query.category}|${categoryValue}`);
    } else {
      pushCategoryQuery(categoryValue);
    }

    toggleFacet(constants.CATEGORY_FACET, categoryValue);
  }

  async function handleReset() {
    pushCategoryQuery(undefined);
    removeFacet(constants.CATEGORY_FACET);
  }
</script>

<template>
  <div
    class="py-6 text-sm text-dark_corduroy"
    v-if="categoryFacets && categoryFacets.length > 1"
  >
    <div class="mb-5 flex justify-between">
      <h4 class="font-medium text-dark-jungle-green">Service Type</h4>
      <button class="text-xs" @click="handleReset">Reset</button>
    </div>
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
      v-show="
        showMore &&
        categoryFacets &&
        categoryFacets.length > maxFacets
      "
      class="mt-5 max-w-fit underline"
      @click="handleShowMore"
    >
      Show more
    </button>
    <button
      v-show="
        !showMore &&
        categoryFacets &&
        categoryFacets.length > maxFacets
      "
      class="mt-5 max-w-fit underline"
      @click="handleShowLess"
    >
      Show less
    </button>
  </div>
</template>

<style scoped></style>
