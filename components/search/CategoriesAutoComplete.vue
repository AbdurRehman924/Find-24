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
    <div class="flex items-center justify-between px-6 py-3">
      <div class="text-sm text-corduroy">
        <h4 class="font-semibold text-dark-jungle-green">Type</h4>
        <ComboboxInput
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
        class="absolute inset-x-0 top-56 max-h-80 overflow-auto"
      >
        <ComboboxOption
          v-for="category in filteredCategories"
          :value="category"
          :key="category.id"
          class="border-b-0.5 border-chinese-white p-4"
          :class="{
            'bg-frostee font-medium text-palma':
              selected?.id === category.id,
          }"
          >{{ category.name }}</ComboboxOption
        >
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>
