<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const showMap = ref(false);

  const servicesStore = useServicesStore();

  const { services } = storeToRefs(servicesStore);

  function toggleMap() {
    showMap.value = !showMap.value;
  }
</script>

<template>
  <SearchMobileBar />
  <SearchBar />
  <div class="mt-14 md:px-8 lg:px-16">
    <div
      class="sm:grid sm:grid-cols-8 sm:justify-center sm:gap-4"
      v-if="!showMap"
    >
      <SearchFilters v-if="services" />
      <SearchResultsList />
      <div class="sticky top-2 col-span-2 hidden h-2/5 xl:block">
        <SearchMap />
      </div>
    </div>
    <SearchMap :for-full-screen="true" v-else />
    <div
      class="sticky bottom-3 mt-3 font-medium text-white xl:hidden"
    >
      <button
        class="mx-auto flex gap-1 rounded-full bg-dark-jungle-green px-6 py-3"
        @click="toggleMap"
      >
        <span v-show="!showMap"> Show Map </span>
        <span v-show="showMap"> Show List </span>
        <span> <IconsTilt /> </span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
