<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const showMap = ref(false);

  const { services } = storeToRefs(useServicesStore());

  const noServicesFound = computed(
    () => services.value?.length === 0,
  );

  function toggleMap() {
    showMap.value = !showMap.value;
  }
</script>

<template>
  <SearchMobileBar />
  <SearchBar />
  <div class="mt-14 md:px-8 2xl:px-16" v-if="!noServicesFound">
    <div
      class="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12"
      v-if="!showMap"
    >
      <SearchFilters v-if="services" />
      <SearchResultsList />
      <div
        class="sticky top-2 col-span-3 hidden max-h-[60dvh] rounded-2xl xl:block 2xl:col-span-2"
        v-if="services"
      >
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
  <div v-else class="flex h-[50dvh] items-center justify-center">
    <div
      class="rounded-2xl bg-white p-16 text-2xl font-bold text-palma shadow-md sm:text-3xl lg:text-5xl"
    >
      <h2>No Services Found</h2>
      <button
        class="mx-auto block rounded-full bg-palma px-4 py-2 text-lg text-white hover:focus:bg-islamic-green"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<style scoped></style>
