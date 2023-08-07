<script setup lang="ts">
  import Service from "~/types/service";

  defineProps<{
    service: Service;
  }>();
</script>

<template>
  <div>
    <pre>
            {{ service }}
        </pre
    >
  </div>
</template>

<style scoped></style>
