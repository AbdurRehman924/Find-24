<script setup lang="ts">
  const query = ref("");

  function handleReset() {
    query.value = "";
  }
</script>

<template>
  <div class="flex items-center justify-between px-6 py-3 text-sm">
    <div class="text-sm text-corduroy">
      <h4 class="font-semibold text-dark-jungle-green">Location</h4>
      <label for="search location" class="sr-only"
        >Search your prefered location
      </label>
      <input
        type="search"
        name="search location"
        placeholder="Type prefered location..."
        v-model="query"
      />
    </div>
    <button role="reset" v-if="query" @click="handleReset">
      <IconsCross />
    </button>
  </div>
</template>

<style scoped>
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
</style>
