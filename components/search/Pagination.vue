<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const servicesStore = useServicesStore();

  const { setPage, nextPage, previousPage } = servicesStore;

  const { page, totalPages } = storeToRefs(servicesStore);

  const isFirstPage = computed(() => page.value === 0);
  const isLastPage = computed(() => page.value === totalPages.value);

  const range = computed(() => {
    const start = Math.max(0, page.value - 1);
    const end = Math.min(start + 2, totalPages.value);

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i,
    );
  });
</script>

<template>
  <div
    class="mx-auto mb-4 mt-14 flex max-w-fit gap-2 font-medium text-dark_corduroy"
    v-if="totalPages > 1"
  >
    <button
      class="flex items-center"
      :class="{ 'opacity-60': isFirstPage }"
      @click="previousPage"
      :disabled="isFirstPage"
    >
      <IconsBackarrow />
      <span>Prev</span>
    </button>
    <button
      v-for="i in range"
      class="h-10 w-10"
      :class="{
        'rounded-full bg-palma text-white': i == page,
      }"
      @click="setPage(i)"
    >
      {{ i + 1 }}
    </button>
    <button
      class="flex items-center"
      :class="{ 'opacity-60': isLastPage }"
      :disabled="isLastPage"
      @click="nextPage"
    >
      <span>Next</span>
      <IconsNextarrow />
    </button>
  </div>
</template>

<style scoped></style>
