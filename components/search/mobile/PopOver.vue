<script lang="ts" setup>
  import { Query } from "~/types/service";

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  function handleClose() {
    emits("close");
  }

  const query = ref<Query>({
    category: "",

    location: {
      lat: 0,
      lng: 0,
    },
  });

  function handleUpdateCategory(category: string) {
    query.value.category = category;
  }

  function hanldeUpdateLocation(lat: number, lng: number) {
    query.value.location.lat = lat;
    query.value.location.lng = lng;
    console.log(query.value);
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
        <SearchCategoriesAutoComplete
          @update:category="handleUpdateCategory"
        />
      </div>
      <div>
        <SearchLocationAutoComplete
          @update:location="hanldeUpdateLocation"
        />
      </div>
    </div>
    <div
      class="absolute inset-x-4 bottom-10 flex items-center justify-between text-sm"
    >
      <button class="font-medium text-corduroy underline">
        Clear All
      </button>
      <button
        class="flex items-center gap-2 rounded-4xl bg-palma px-4 py-3.5 font-semibold text-white shadow-variant3 focus:bg-islamic-green"
      >
        <IconsSearch />
        <span>Find Providers</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
