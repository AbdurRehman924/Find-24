<script setup lang="ts">
  import { Query } from "~/types/service";

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
  }
</script>

<template>
  <div
    class="relative mx-auto hidden max-w-4xl rounded-4xl border-0.5 border-chinese-white bg-white py-3 pl-8 pr-3 shadow-variant1 lg:flex lg:items-center lg:gap-6"
  >
    <SearchCategoriesAutoComplete
      class="grow"
      @update:category="handleUpdateCategory"
    />
    <span class="h-11 w-[0.5px] bg-chinese-white"></span>
    <SearchLocationAutoComplete
      class="grow"
      @update:location="hanldeUpdateLocation"
    />
    <button
      class="font-semi flex items-center gap-2 whitespace-nowrap rounded-4xl bg-palma px-4 py-3.5 text-sm text-white hover:bg-islamic-green focus:bg-islamic-green"
    >
      <IconsSearch />
      <span>Find Providers</span>
    </button>
  </div>
</template>

<style scoped></style>
