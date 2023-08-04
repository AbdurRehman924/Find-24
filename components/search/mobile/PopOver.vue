<script lang="ts" setup>
  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  function handleClose() {
    emits("close");
  }
</script>

<template>
  <div class="absolute inset-0 z-10 bg-white px-4 py-6">
    <button
      class="rounded-full border border-chinese-white p-2 shadow-variant2"
      @click="handleClose"
    >
      <IconsCross class="h-3 w-3" />
    </button>
    <div
      class="mt-6 rounded-lg border-0.5 border-chinese-white shadow-variant1"
    >
      <div class="border-b-0.5 border-b-chinese-white">
        <SearchCategoriesAutoComplete />
      </div>
      <div>
        <SearchLocationAutoComplete />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
