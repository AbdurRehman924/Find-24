<template>
  <div
    class="relative flex h-20 justify-between border-b-2 px-4 py-6"
  >
    <IconsFind24 />
    <IconsHamburger
      v-if="!mobileUIOpen"
      @click="mobileUIOpen = true"
    />
    <IconsCross
      v-if="mobileUIOpen"
      @click="mobileUIOpen = false"
    />
    <div
      v-if="mobileUIOpen"
      @click="mobileUIOpen = false"
      class="absolute -bottom-[90px] left-0 z-10 w-full bg-corduroy py-16"
    >
      Pop over
    </div>
  </div>
</template>
<script setup>
  const mobileUIOpen = ref(false);
</script>
<!-- <style lang="postcss" scopped>
</style> -->
