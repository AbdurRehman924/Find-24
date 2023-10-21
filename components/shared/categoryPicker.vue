<template>
  <div class="relative text-dark_corduroy">
    <Combobox v-model="selected">
      <div
        class="rounded-lg border border-chinese-white p-4 focus-within:border-palma focus-within:text-dark-jungle-green"
      >
        <ComboboxInput
          :displayValue="(category: any) => category.data.title"
          @change="query = $event.target.value"
          placeholder="e.g, Plumber"
          id="category"
          class="w-full rounded-lg bg-saltpan"
        />
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions class="category_options">
          <div
            v-if="filtererdCategories.length === 0 && query !== ''"
            class="text-gray-700 relative cursor-default select-none px-4 py-2"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="category in filtererdCategories"
            as="template"
            :key="category.data._id"
            :value="category"
            v-slot="{ active }"
          >
            <li
              class="category_option"
              :class="{
                'bg-frostee text-palma': active,
              }"
            >
              <span>
                {{ category.data.title }}
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </Combobox>
    <FormKit
      :wrapper-class="{ hidden: true }"
      type="text"
      name="categoryId"
      validation="required"
      :validation-messages="{
        required: 'Please select a service',
      }"
      v-model="categoryId"
    />
  </div>
</template>

<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from "@headlessui/vue";
  import { Category } from "~/types/category";

  const props = defineProps<{
    categories: Category[];
  }>();

  const selected = ref();
  const query = ref("");
  const categoryId = ref("");

  const filtererdCategories = computed(() =>
    query.value === ""
      ? props.categories
      : props.categories.filter((category) =>
          category.data.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, "")),
        ),
  );
  watch(selected, () => {
    categoryId.value = selected.value.data._id;
  });
</script>

<style lang="postcss">
  .category_options {
    @apply absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg focus:outline-none;
  }

  .category_option {
    @apply cursor-pointer px-6 py-2 text-base;
  }
</style>
