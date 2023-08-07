<script setup lang="ts">
  const { fetchServices } = useServices();
  const { data: services, error } = fetchServices();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-6">
    <div v-for="service in services" :key="service.id">
      <SearchResultCard :service="service" />
    </div>
  </div>
</template>

<style scoped></style>
