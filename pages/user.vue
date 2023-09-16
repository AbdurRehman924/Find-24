<template>
  <div class="mx-auto grid max-w-1920 grid-cols-4 bg-penache p-14">
    <div
      id="side_menu"
      class="sticky top-0 col-span-1 mr-6 flex flex-col rounded-2xl border border-chinese-white bg-white shadow-variant5"
    >
      <!-- profile pic, name, email -->
      <div
        class="flex flex-col items-center border-b border-chinese-white p-6 text-dark_corduroy"
      >
        <div>
          <img
            class="mb-4 rounded-full"
            src="https://placehold.co/94x94"
            alt=""
          />
        </div>
        <div class="mb-1 text-xl font-semibold">Kumar Sanu</div>
        <div class="text-sm">someone@gmail.com</div>
      </div>

      <!-- rest of stuff -->
      <div class="p-6 font-medium text-corduroy">
        <div class="mb-8">
          <div class="mb-4 text-sm text-palma">Overview</div>
          <div>
            <NuxtLink to="/user" class="link">
              <IconsDashboard />
              <div>Dashboard</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsMessage />
              <div>Messages</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsRequest />
              <div>Service Requests</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsHistory />
              <div>Consumed Services</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsHeart />
              <div>Favorites</div>
            </NuxtLink>
          </div>
        </div>
        <div>
          <div class="mb-4 text-sm text-palma">Account</div>
          <div>
            <NuxtLink to="/" class="link">
              <IconsHelp />
              <div>Help and Support</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsSettings />
              <div>Settings</div>
            </NuxtLink>
            <NuxtLink to="/" class="link">
              <IconsLogout />
              <div>Logout</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <NuxtPage class="col-span-3" />
  </div>
</template>
<script setup></script>
<style scoped>
  .link {
    @apply flex gap-x-3 p-3 hover:text-palma;
  }
  .router-link-exact-active {
    @apply rounded-lg bg-frostee text-palma;
  }
</style>
