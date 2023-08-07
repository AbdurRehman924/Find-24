<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";

  const query = ref("");

  function handleReset() {
    query.value = "";
  }
</script>

<template>
  <Combobox as="template">
    <div class="flex items-center justify-between px-6 py-3">
      <div class="text-sm text-corduroy">
        <h4 class="font-semibold text-dark-jungle-green">Location</h4>
        <ComboboxInput
          placeholder="Enter prefered address..."
          @change="query = $event.target.value"
          autocomplete="off"
        />
      </div>
      <button role="reset" v-if="query" @click="handleReset">
        <IconsCross />
      </button>
      <ComboboxOptions
        class="absolute inset-x-0 top-56 max-h-80 overflow-auto"
      >
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>
