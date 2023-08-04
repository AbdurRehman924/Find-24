<script lang="ts" setup>
  const showPopOver = ref(false);

  function handleSearchPopOver() {
    showPopOver.value = true;
  }
</script>

<template>
  <div
    class="relative rounded-4xl border-0.5 border-chinese-white shadow-variant1"
  >
    <button
      class="flex w-full items-center justify-between py-3 pl-8 pr-2"
      @click="handleSearchPopOver"
    >
      <div class="text-xs">
        <h4 class="text-left font-semibold">Type</h4>
        <span class="text-corduroy"
          >What service do you need....</span
        >
      </div>
    </button>
    <button class="absolute right-2 top-1">
      <IconsFilters />
    </button>
  </div>
  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-all delay-400 ease-in"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-all delay-400 ease-out"
      leave-to-class="opacity-0"
    >
      <SearchMobilePopOver
        v-if="showPopOver"
        @close="showPopOver = false"
      />
    </Transition>
  </Teleport>
</template>

<style scoped></style>
