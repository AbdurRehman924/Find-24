<script lang="ts" setup>
  import useServicesStore from "~/stores/services";

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  const { removeAllFacets, searchServices } = useServicesStore();

  function handleClose() {
    emits("close");
  }

  function handleSearch() {
    searchServices();
    emits("close");
  }
</script>

<template>
  <div
    class="absolute inset-x-0 z-10 min-h-screen bg-penache px-4 py-6"
  >
    <button
      class="rounded-full border border-chinese-white p-2 shadow-variant2"
      @click="handleClose"
    >
      <IconsCross class="h-3 w-3" />
    </button>
    <div
      class="mt-6 rounded-lg border-0.5 border-chinese-white bg-white shadow-variant1"
    >
      <div class="border-b-0.5 border-b-chinese-white">
        <SearchCategoriesAutoComplete />
      </div>
      <div>
        <SearchLocationAutoComplete />
      </div>
    </div>
    <div
      class="absolute inset-x-4 bottom-10 flex items-center justify-between text-sm"
    >
      <button
        class="font-medium text-corduroy underline"
        @click="removeAllFacets"
      >
        Clear All
      </button>
      <button
        class="flex items-center gap-2 rounded-4xl bg-palma px-4 py-3.5 font-semibold text-white shadow-variant3 focus:bg-islamic-green"
        @click="handleSearch"
      >
        <IconsSearch />
        <span>Find Providers</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
