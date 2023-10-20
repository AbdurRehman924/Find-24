<template>
  <div class="flex flex-col">
    <div class="mb-6 text-2xl font-semibold">Settings</div>
    <div class="mb-8 flex flex-wrap gap-y-4">
      <RouterLink v-for="link in links" :to="link.path" class="link">
        {{ link.name }}
      </RouterLink>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
  const links = [
    {
      name: "Profile Settings",
      path: "/user/settings/",
    },
    {
      name: "Login & Security",
      path: "/user/settings/login_and_security",
    },
    {
      name: "Notifications",
      path: "/user/",
    },
    {
      name: "Payment Settings",
      path: "/user/",
    },
    {
      name: "Connected Apps",
      path: "/user/",
    },
  ];
</script>
<style lang="postcss" scoped>
  .link {
    @apply w-44 border-b-2 border-chinese-white pb-3 text-center text-lg font-medium text-dark_corduroy;
  }
  .router-link-exact-active {
    @apply border-palma text-palma;
  }
</style>
