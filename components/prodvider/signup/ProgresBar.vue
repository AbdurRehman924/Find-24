<script lang="ts" setup>
  defineProps<{
    currentSection: number;
  }>();
</script>

<template>
  <div class="flex flex-col gap-4 p-4 sm:flex-row sm:px-8 xl:px-16">
    <div class="flex items-center gap-2">
      <div
        class="h-6 w-6 rounded-full border-4 border-malachite"
        :class="{
          'flex items-center bg-malachite': currentSection != 0,
        }"
      >
        <IconsCheck v-if="currentSection > 0" />
      </div>
      <span class="text-lg font-semibold">01</span>
      <span class="text-sm font-medium text-dark_corduroy"
        >Personal Info</span
      >
      <div class="h-[3px] w-11 rounded-2xl bg-tara">
        <div
          class="h-[3px] w-1/2 rounded-2xl bg-malachite"
          :class="{ 'w-full': currentSection > 0 }"
        ></div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div
        class="h-6 w-6 rounded-full border-4 border-malachite"
        :class="{
          'flex items-center bg-malachite': currentSection > 1,
        }"
      >
        <IconsCheck v-if="currentSection > 1" />
      </div>
      <span class="text-lg font-semibold">02</span>
      <span class="text-sm font-medium text-dark_corduroy"
        >Professional Info</span
      >
      <div class="h-[3px] w-11 rounded-2xl bg-tara">
        <div
          v-if="currentSection != 0"
          class="h-[3px] w-1/2 rounded-2xl bg-malachite"
          :class="{ 'w-full': currentSection > 1 }"
        ></div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div
        class="h-6 w-6 rounded-full border-4 border-malachite"
        :class="{
          'flex items-center bg-malachite': currentSection > 2,
        }"
      >
        <IconsCheck v-if="currentSection > 2" />
      </div>
      <span class="text-lg font-semibold">03</span>
      <span class="text-sm font-medium text-dark_corduroy"
        >Verification Documents</span
      >
      <div class="h-[3px] w-11 rounded-2xl bg-tara">
        <div
          v-if="currentSection > 1"
          class="h-[3px] w-1/2 rounded-2xl bg-malachite"
          :class="{ 'w-full': currentSection > 2 }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
