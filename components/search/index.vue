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
    <!-- <button
      class="sticky bottom-2 left-calc mt-2 rounded-lg bg-palma px-4 py-3 text-white"
      @click="toggleMap"
    >
      <span v-show="!showMap"> Show Map </span>
      <span v-show="showMap"> Show List </span>
    </button> -->
  </div>
</template>

<style scoped></style>
