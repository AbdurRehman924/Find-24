<script setup lang="ts">
  import { useUserStore } from "~/stores/userStore";

  const { user } = useUserStore();
  const { imagesURL } = useRuntimeConfig().public;

  const goToSection = ref(0);
</script>

<template>
  <main
    class="mx-auto flex max-w-1440 flex-col items-center gap-14 px-4 py-14 sm:px-8 lg:px-16"
  >
    <div class="text-center">
      <h1
        class="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl"
      >
        Empower Your Earning Journey!
      </h1>
      <p class="text-dark_corduroy">
        Join us free to showcase your skills and connect with a vast
        customer base
      </p>
    </div>
    <section class="flex w-full flex-col gap-6 lg:flex-row">
      <div class="img-wrapper">
        <img
          v-if="user.image"
          :src="`${imagesURL}/${user.image}`"
          alt="Your image"
          class="h-full w-full rounded-t-2xl object-cover"
        />
        <img
          v-else
          class="h-full w-full rounded-t-2xl object-cover"
          src="~/assets/images/provider-placeholder.jpg"
          alt="Provider Image Placeholder"
        />
      </div>
      <ProdviderSignupPersonalInfo
        v-if="goToSection == 0"
        @go-next="goToSection++"
      />
      <ProdviderSignupProfessionalnfo v-if="goToSection == 1" />
    </section>
  </main>
</template>

<style lang="postcss" scoped>
  .img-wrapper {
    aspect-ratio: 82 / 113;
  }
  @screen sm {
    .img-wrapper {
      aspect-ratio: 176 / 113;
    }
  }
  @screen lg {
    .img-wrapper {
      aspect-ratio: 445 / 752;
      max-width: 445px;
      max-height: 752px;
    }
  }
</style>
