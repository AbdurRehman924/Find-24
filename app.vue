<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Find24` : "Find24";
    },
  });
</script>

<template>
  <NuxtPage />
</template>
