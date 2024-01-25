<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";
  import { storeToRefs } from "pinia";
  import useServiceStore from "~/stores/services";

  const servicesStore = useServiceStore();

  const { resetCategory } = servicesStore;
  const { category } = storeToRefs(servicesStore);

  const categories = [
    "Gardner",
    "Electrician",
    "Baby Sitter",
    "Plumber",
    "Carpenter",
    "Painter",
    "Tutor",
    "Others",
  ];

  const query = ref("");

  const filteredCategories = computed(() => {
    return categories.filter((category) =>
      category.toLowerCase().includes(query.value.toLowerCase()),
    );
  });

  async function handleReset() {
    query.value = "";
    if (category.value) {
      resetCategory();
    }
  }

  watch(category, () => {
    query.value = "";
  });
</script>

<template>
  <Combobox as="template" v-model="category">
    <div class="flex items-center px-6 py-3 sm:p-0">
      <div class="rounded- grow text-sm">
        <h4 class="font-semibold">Type</h4>
        <ComboboxInput
          class="w-full border-none p-0"
          placeholder="What service do you need..."
          @change="query = $event.target.value"
          :display-value="() => (category ? category : query)"
          autocomplete="off"
        />
      </div>
      <button
        role="reset"
        v-if="category || query"
        @click="handleReset"
      >
        <IconsCross />
      </button>
      <ComboboxOptions
        class="absolute inset-x-0 top-56 z-10 max-h-80 overflow-auto text-corduroy sm:left-0 sm:right-[60%] sm:top-20 sm:rounded-2xl"
      >
        <ComboboxOption
          v-for="(category, index) in filteredCategories"
          :value="category"
          :key="index"
          v-slot="{ selected, active }"
          as="template"
        >
          <li
            class="cursor-pointer p-4 hover:bg-frostee hover:font-medium hover:text-palma focus:bg-frostee focus:font-medium focus:text-palma sm:border-none"
            :class="{
              'bg-frostee font-medium text-palma': selected,
              'border-l-2 border-palma bg-frostee text-palma': active,
            }"
          >
            {{ category }}
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>
