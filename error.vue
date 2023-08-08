<script setup lang="ts">
  defineProps<{
    error: any;
  }>();

  function handleClearError() {
    clearError({ redirect: "/" });
  }
</script>

<template>
  <div
    v-if="error.statusCode == 500"
    class="flex h-screen w-screen flex-col items-center justify-center"
  >
    <h1 class="text-3xl font-bold text-palma">
      Something went wrong!...
    </h1>
    <button
      class="rounded-lg bg-palma px-4 py-3 text-white"
      @click="handleClearError"
    >
      Go Back Home
    </button>
  </div>
</template>

<style scoped></style>
