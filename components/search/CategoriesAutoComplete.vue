<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";

  const categories = [
    { id: 1, name: "Gardner" },
    { id: 2, name: "Electrician" },
    { id: 3, name: "Baby Sitter" },
    { id: 4, name: "Plumber" },
    { id: 5, name: "Carpenter" },
    { id: 6, name: "Painter" },
    { id: 7, name: "Tutor" },
    { id: 8, name: "Others" },
  ];

  const filteredCategories = computed(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(query.value.toLowerCase()),
    );
  });

  const query = ref("");

  const selected = ref<{ id: number; name: string } | null>(null);

  function handleReset() {
    query.value = "";
    selected.value = null;
  }
</script>

<template>
  <Combobox as="template" v-model="selected">
    <div class="flex items-center px-6 py-3 sm:p-0">
      <div class="rounded- grow text-sm">
        <h4 class="font-semibold">Type</h4>
        <ComboboxInput
          class="w-full"
          placeholder="What service do you need..."
          @change="query = $event.target.value"
          :display-value="() => (selected ? selected.name : query)"
          autocomplete="off"
        />
      </div>
      <button role="reset" v-if="query" @click="handleReset">
        <IconsCross />
      </button>
      <ComboboxOptions
        class="absolute inset-x-0 top-56 max-h-80 overflow-auto bg-white text-corduroy sm:left-0 sm:right-[60%] sm:top-20 sm:rounded-2xl"
      >
        <ComboboxOption
          v-for="category in filteredCategories"
          :value="category"
          :key="category.id"
          v-slot="{ selected, active }"
          as="template"
        >
          <li
            class="cursor-pointer border-b-0.5 border-chinese-white p-4 hover:bg-frostee hover:font-medium hover:text-palma focus:bg-frostee focus:font-medium focus:text-palma sm:border-none"
            :class="{
              'bg-frostee font-medium text-palma': selected,
              'bg-frostee': active,
            }"
          >
            {{ category.name }}
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>
