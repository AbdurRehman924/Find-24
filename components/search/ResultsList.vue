<script setup lang="ts">
  const { fetchServices } = useServices();
  const services = await fetchServices();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-6">
    <ClientOnly>
      <div v-for="service in services" :key="service.id">
        <SearchResultCard :service="service" />
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
