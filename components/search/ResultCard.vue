<script setup lang="ts">
  import Service from "~/types/service";
  defineProps<{
    service: Service | null;
  }>();
</script>

<template>
  <nuxt-link
    to="/"
    class="flex flex-col gap-8 rounded-2xl border-0.5 border-tonal_dark_mercury bg-white p-4 shadow-variant4"
    v-if="service"
  >
    <div class="aspect-h-7 aspect-w-9 z-0 min-w-sm">
      <img
        :src="service.image"
        alt="Provider image"
        class="rounded-lg object-cover"
        loading="eager"
      />
    </div>
    <div class="flex flex-col gap-2 text-lg font-medium">
      <h3>{{ service.firstName }} {{ service.lastName }}</h3>
      <p class="text-palma">{{ service.category }}</p>
      <p class="flex items-center gap-1 text-base font-medium">
        <span class="flex items-center gap-1">
          <IconsStar class="text-ripe-lemon" /> {{ service.rating }}
        </span>
        <span class="h-0.5 w-0.5 bg-dark-jungle-green"></span>
        <span class="text-dark_corduroy"
          >{{ service.reviewsCount }} reviews</span
        >
      </p>
      <p class="flex items-center justify-between">
        <span>${{ service.charges }}</span>
        <nuxt-link
          to="/"
          class="flex items-center gap-1 text-sm font-medium text-palma"
          >See details <IconsRightarrow />
        </nuxt-link>
      </p>
    </div>
    <slot />
  </nuxt-link>
</template>

<style scoped></style>
