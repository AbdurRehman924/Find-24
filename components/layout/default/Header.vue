<template>
  <div class="border-b-[0.5px] border-chinese-white">
    <div
      class="relative mx-auto flex h-20 max-w-1920 justify-between px-4 py-6 sm:px-8 lg:px-16"
    >
      <NuxtLink to="/">
        <IconsFind24 />
      </NuxtLink>
      <div class="hidden items-center gap-x-8 lg:flex">
        <a href="#" class="desk_nav_links">Services</a>
        <a href="#" class="desk_nav_links">Find Provider</a>
        <a href="#" class="desk_nav_links">Features</a>
        <a href="#" class="desk_nav_links">About us</a>
      </div>
      <div class="flex items-center justify-end">
        <div class="mr-6 hidden items-center gap-x-6 lg:flex">
          <button
            class="desk_nav_links"
            @click="signupModalController.open"
          >
            Sign up
          </button>
          <button
            class="desk_nav_links"
            @click="loginModalController.open"
          >
            Log in
          </button>
        </div>
        <SharedModal
          title="Log in"
          :controller="loginModalController"
        >
          <AuthLoginModal />
        </SharedModal>
        <SharedModal
          title="Sign up"
          :controller="signupModalController"
        >
          <AuthSignupModal />
        </SharedModal>
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
        class="absolute left-0 top-[80px] z-10 h-screen w-full bg-white px-4 py-7"
      >
        <div class="flex flex-col items-center gap-y-9">
          <NuxtLink to="/" class="mobile_nav_links"
            >Services</NuxtLink
          >
          <NuxtLink to="/" class="mobile_nav_links"
            >Find Provider</NuxtLink
          >
          <NuxtLink to="/" class="mobile_nav_links"
            >Features</NuxtLink
          >
          <NuxtLink to="/" class="mobile_nav_links"
            >About Us</NuxtLink
          >
          <NuxtLink
            to="/"
            class="mobile_nav_links"
            @click="
              () => {
                mobileUIOpen = false;
                signupModalController.open();
              }
            "
            >Signup</NuxtLink
          >
          <!-- <button>Signup</button> -->
          <NuxtLink
            to="/"
            class="mobile_nav_links"
            @click="
              () => {
                mobileUIOpen = false;
                loginModalController.open();
              }
            "
          >
            Log In
          </NuxtLink>
          <NuxtLink
            to="/"
            class="w-full rounded-full bg-palma px-6 py-3 text-center text-white hover:bg-islamic-green sm:hidden"
          >
            Provide Services
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useModal } from "@/composables/useModal.ts";
  const router = useRouter();
  const route = useRoute();
  const mobileUIOpen = ref(false);
  const loginModalController = useModal();
  const signupModalController = useModal();
</script>
<style lang="postcss" scopped>
  .mobile_nav_links {
    @apply w-full text-center font-medium text-corduroy hover:text-palma;
  }
  .desk_nav_links {
    @apply text-sm font-medium text-corduroy hover:text-palma;
  }
</style>
