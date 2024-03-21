<template>
  <div class="flex">
    <!-- Control panel -->
    <div class="h-screen w-1/6 bg-white pl-5 shadow-xl">
      <div v-for="option in options" :key="option.heading">
        <p class="mb-4 mt-8 cursor-default text-xs text-palma">
          {{ option.heading }}
        </p>
        <div class="grid w-52 grid-cols-1">
          <div
            @click="selectComponent = tile"
            class="ml-4 cursor-pointer rounded-xl px-2 py-4 text-sm text-corduroy hover:bg-frostee"
            v-for="tile in option.tiles"
            :key="tile"
          >
            {{ tile }}
          </div>
        </div>
      </div>
    </div>
    <!-- Content panel -->
    <div class="w-full p-4">
      <ProviderDashboardMain v-if="selectComponent == 'Dashboard'" />
      <ProviderDashboardMessages
        v-if="selectComponent == 'Messages'"
      />
      <ProviderDashboardMyServices
        v-if="selectComponent == 'My Services'"
      />
      <ProviderDashboardServiceRequests
        v-if="selectComponent == 'Service Requests'"
      />
      <ProviderDashboardEarnings
        v-if="selectComponent == 'Earnings'"
      />
      <ProviderDashboardSubscription
        v-if="selectComponent == 'Subscription'"
      />
      <ProviderDashboardServiceHistory
        v-if="selectComponent == 'Service History'"
      />
    </div>
  </div>
</template>

<script setup>
  let selectComponent = ref("Dashboard");
  let options = [
    {
      heading: "Overview",
      tiles: [
        "Dashboard",
        "Messages",
        "My Services",
        "Service Requests",
        "Subscription",
        "Earnings",
        "Service History",
      ],
    },
    {
      heading: "Account",
      tiles: ["Help & Support", "Settings", "Logout"],
    },
  ];
</script>
