<template>
  <header
    class="sticky top-0 z-10 border-b-[0.5px] border-chinese-white bg-white"
  >
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
        <div
          v-if="!isLoggedIn"
          class="mr-6 hidden items-center gap-x-6 lg:flex"
        >
          <button
            class="desk_nav_links"
            @click="useModals().signupModal.open"
          >
            Sign up
          </button>
          <button
            class="desk_nav_links"
            @click="useModals().loginModal.open"
          >
            Log in
          </button>
        </div>

        <button
          class="mr-4 hidden rounded-full bg-palma px-6 py-3 text-white hover:bg-islamic-green sm:flex"
        >
          Provide Services
        </button>
        <div
          v-if="isLoggedIn"
          class="relative hidden items-center gap-x-6 lg:flex"
        >
          <IconsBell class="" />
          <div
            class="relative p-1"
            @click="
              showProfilePopover
                ? (showProfilePopover = false)
                : (showProfilePopover = true)
            "
          >
            <img
              class="rounded-full"
              src="https://placehold.co/32x32"
              alt="profile picture"
            />
            <IconsOnlineIndicator class="absolute bottom-0 right-0" />
          </div>

          <div
            ref="profilePopover"
            v-if="showProfilePopover"
            class="absolute right-5 top-10 w-[340px] rounded-[20px] bg-white p-8"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="http://placehold.co/115x115"
                alt=""
              />
              <div>name</div>
              <div>email</div>
            </div>
          </div>
        </div>
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
      <template>
        <SharedModal
          title="Log in"
          :controller="useModals().loginModal"
          @close="router.push({ query: null })"
        >
          <AuthLoginModal />
        </SharedModal>
        <SharedModal
          title="Sign up"
          :controller="useModals().signupModal"
          @close="router.push({ query: null })"
        >
          <AuthSignupModal />
        </SharedModal>

        <SharedModal
          title=""
          :controller="useModals().forgotPasswordModal"
          @close="router.push({ query: null })"
        >
          <AuthForgotPasswordModal />
        </SharedModal>
        <SharedModal
          title=""
          :controller="useModals().resetPasswordModal"
        >
          <AuthResetPasswordModal />
        </SharedModal>
        <SharedModal
          title=""
          :controller="useModals().emailConfirmSuccessModal"
        >
          <AuthConfirmEmailSuccess />
        </SharedModal>
        <SharedModal
          title=""
          :controller="useModals().emailConfirmFailedModal"
        >
          <AuthConfirmEmailFailed />
        </SharedModal>
      </template>
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
                useModals().signupModal.open();
              }
            "
            >Signup</NuxtLink
          >
          <NuxtLink
            to="/"
            class="mobile_nav_links"
            @click="
              () => {
                mobileUIOpen = false;
                useModals().loginModal.open();
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
  </header>
</template>
<script setup>
  import { storeToRefs } from "pinia";
  import { useUserStore } from "@/stores/userStore";

  const router = useRouter();
  const route = useRoute();
  const mobileUIOpen = ref(false);
  const { user, isLoggedIn } = storeToRefs(useUserStore());

  const profilePopover = ref(null);
  const showProfilePopover = ref(false);

  onClickOutside(profilePopover, (e) => {
    console.log(e);
    showProfilePopover.value = false;
  });
</script>
<style lang="postcss" scopped>
  .mobile_nav_links {
    @apply w-full text-center font-medium text-corduroy hover:text-palma;
  }
  .desk_nav_links {
    @apply text-sm font-medium text-corduroy hover:text-palma;
  }
</style>
