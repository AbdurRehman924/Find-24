<template>
  <div class="border-b-2 border-chinese-white">
    <div
      class="relative mx-auto flex h-20 max-w-[1920px] justify-between px-4 py-6 sm:px-8 lg:px-16"
    >
      <NuxtLink to="/">
        <IconsFind24 />
      </NuxtLink>
      <div class="hidden items-center gap-x-8 lg:flex">
        <a
          href="#"
          class="desk_nav_links"
          >Services</a
        >
        <a
          href="#"
          class="desk_nav_links"
          >Find Provider</a
        >
        <a
          href="#"
          class="desk_nav_links"
          >Features</a
        >
        <a
          href="#"
          class="desk_nav_links"
          >About us</a
        >
      </div>
      <div class="flex items-center justify-end">
        <div class="mr-6 hidden items-center gap-x-6 lg:flex">
          <a
            href="#"
            class="desk_nav_links"
            >Sign up</a
          >
          <a
            href="#"
            class="desk_nav_links"
            >Log in</a
          >
        </div>
        <button
          class="mr-4 hidden rounded-full bg-palma px-6 py-3 text-white hover:bg-islamic-green sm:flex"
        >
          Provide Services
        </button>
        <IconsHamburger
          class="lg:hidden"
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
          <div class="mobile_nav_links">Services</div>
          <div class="mobile_nav_links">Find Provider</div>
          <div class="mobile_nav_links">Features</div>
          <div class="mobile_nav_links">About Us</div>
          <div class="mobile_nav_links">Signup</div>
          <div class="mobile_nav_links">Log In</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const mobileUIOpen = ref(false);
</script>
<style lang="postcss" scopped>
  .mobile_nav_links {
    @apply w-full text-center font-medium text-corduroy;
  }
  .desk_nav_links {
    @apply text-sm font-medium text-corduroy hover:text-palma;
  }
</style>
