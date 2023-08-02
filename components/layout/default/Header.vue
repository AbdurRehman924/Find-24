<template>
  <div
    class="relative flex h-20 justify-between border-b-2 border-chinese-white px-4 py-6"
  >
    <IconsFind24 />
    <div class="flex items-center justify-end">
      <button
        class="mr-4 hidden rounded-full bg-palma px-6 py-3 text-white sm:flex"
      >
        Provide Services
      </button>
      <IconsHamburger
        v-if="!mobileUIOpen"
        @click="mobileUIOpen = true"
      />
      <IconsCross
        v-if="mobileUIOpen"
        @click="mobileUIOpen = false"
      />
    </div>
    <div
      v-if="mobileUIOpen"
      class="absolute left-0 top-[80px] z-10 w-full bg-white py-7"
    >
      <div class="flex flex-col items-center gap-y-9">
        <div class="nav_links">Services</div>
        <div class="nav_links">Find Provider</div>
        <div class="nav_links">Features</div>
        <div class="nav_links">About Us</div>
        <div class="nav_links">Signup</div>
        <div class="nav_links">Log In</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const mobileUIOpen = ref(false);
</script>
<style lang="postcss" scopped>
  .nav_links {
    @apply w-full text-center font-medium text-corduroy;
  }
</style>
