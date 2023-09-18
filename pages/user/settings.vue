<template>
  <div class="flex flex-col">
    <div class="mb-6 text-2xl font-semibold">Settings</div>
    <div class="flex">
      <div class="link">
        link

        <div class=""></div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
  .link {
    @apply mb-3 w-44 text-lg font-medium text-dark_corduroy;

    > .link_under {
      @apply border-2;
    }
  }
</style>
