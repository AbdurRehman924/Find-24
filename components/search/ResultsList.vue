<script setup lang="ts">
  const { fetchServices } = useServices();
  const { data: services, error } = fetchServices();
</script>

<template>
  <div>
    <SearchResultCard
      v-for="service in services"
      :key="service.id"
      :service="service"
    />
  </div>
</template>

<style scoped></style>
