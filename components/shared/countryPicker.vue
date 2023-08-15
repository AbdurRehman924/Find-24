<template>
  <div
    class="auth-input relative w-full"
    :class="{
      'field-error': errorMessage,
    }"
  >
    <Combobox v-model="selected">
      <div class="combobox">
        <ComboboxInput
          :displayValue="(country) => country.name"
          @change="query = $event.target.value"
          placeholder="Country"
        />
        <ComboboxButton class="combobox_button">
          <IconsChevronupdown class="icon" aria-hidden="true" />
        </ComboboxButton>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions class="country_options">
          <div
            v-if="filtererdCountries.length === 0 && query !== ''"
            class="text-gray-700 relative cursor-default select-none px-4 py-2"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="country in filtererdCountries"
            as="template"
            :key="country.code"
            :value="country"
            v-slot="{ active }"
          >
            <li
              class="country_option"
              :class="{
                'bg-athens-gray': active,
              }"
            >
              <span>
                {{ country.flag }}
                {{ country.name }}
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </Combobox>
    <input type="text" name="country" style="display: none" />
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from "@headlessui/vue";
  //   import { useField } from "vee-validate";
  //   import * as yup from "yup";
  import countries from "@/data/countries.json";
  //   import Country from "~/types/country";
  console.log(countries);

  const selected = ref();
  const query = ref("");
  const errorMessage = ref(null);
  const value = ref("");
  //   const { errorMessage, value } = useField(
  //     "country",
  //     yup.string().required("Country is required").nullable(),
  //   );

  const filtererdCountries = computed(() =>
    query.value === ""
      ? countries
      : countries.filter((coutry) =>
          coutry.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, "")),
        ),
  );
  watch(selected, () => {
    if (selected.value) {
      value.value = selected.value.name.toLowerCase();
    }
  });
</script>

<style lang="postcss">
  .combobox {
    @apply h-full w-full;
  }

  .combobox input {
    @apply h-full w-full border-none px-6 py-4 outline-0
        focus:border-none focus:ring-0;
  }

  .combobox_button {
    @apply absolute right-0 h-full w-20;
  }
  .icon {
    @apply absolute right-6 top-4 transform transition-transform duration-300;
  }

  .country_options {
    @apply absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg focus:outline-none;
  }

  .country_option {
    @apply cursor-pointer px-6 py-2 text-base;
  }
</style>
