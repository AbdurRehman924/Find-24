<script lang="ts" setup>
  const showMap = ref(false);

  function toggleMap() {
    showMap.value = !showMap.value;
  }
</script>

<template>
  <SearchMobileBar />
  <SearchBar />
  <div class="mt-14">
    <SearchResultsList v-if="!showMap" />
    <SearchMap v-if="showMap" />
    <div class="sticky bottom-3 mt-3 font-medium text-white">
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
