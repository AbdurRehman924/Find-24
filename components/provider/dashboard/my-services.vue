<template>
  <div v-if="!my_services">
    <p>My services</p>
    <div
      class="h-72 w-full items-center rounded-lg bg-white text-center"
    >
      <p class="text-2xl">No service created</p>
      <p>
        Create a brand-new service that showcases your unique skills.
      </p>
      <button class="h-14 w-52 rounded-full bg-malachite text-white">
        + Create services
      </button>
    </div>
  </div>
  <div v-if="my_services">
    <div class="grid cursor-pointer grid-cols-3 gap-8">
      <div @click="selected_component = 'service-information'">
        <p>Service information</p>
        <p>Enter service information</p>
        <hr class="h-1 w-full rounded-full bg-malachite" />
      </div>
      <div @click="selected_component = 'availability'">
        <p>Availability</p>
        <p>Select available date & time</p>
        <hr class="h-1 w-full rounded-full bg-malachite" />
      </div>
      <div @click="selected_component = 'publish'">
        <p>Publish</p>
        <p>That's all</p>
        <hr class="h-1 w-full rounded-full bg-malachite" />
      </div>
    </div>
    <div class="my-8 bg-white p-6">
      <!-- Service Information -->
      <div v-if="selected_component == 'service-information'">
        <ProviderDashboardMyServicesComponentsServiceInformation />
      </div>
      <!-- Availability -->
      <div v-if="selected_component == 'availability'">
        <ProviderDashboardMyServicesComponentsAvailability />
      </div>
      <div v-if="selected_component == 'publish'">
        <ProviderDashboardMyServicesComponentsPublish />
      </div>
    </div>
  </div>
</template>
<script setup>
  let my_services = ref(true);
  let selected_component = ref("service-information");
</script>
