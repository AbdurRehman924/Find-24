<template>
  <div class="auth-input relative w-full">
    <Combobox v-model="selected">
      <div class="combobox rounded-lg border border-chinese-white">
        <ComboboxInput
          :displayValue="(country: any) => country.name"
          @change="query = $event.target.value"
          placeholder="Country"
          class="rounded-lg"
          :class="{ 'bg-saltpan text-dark_corduroy': initialValue }"
        />
        <ComboboxButton class="combobox_button" name="dropdown">
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
                'bg-frostee text-palma': active,
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
    <FormKit
      :wrapper-class="{ hidden: true }"
      type="text"
      name="country"
      id="country"
      validation="required"
      :validation-messages="{
        required: 'Please select your country',
      }"
      v-model="formKitCountry"
    />
  </div>
</template>

<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from "@headlessui/vue";
  import countries from "@/data/countries.json";
  //   import Country from "~/types/country";

  const props = defineProps<{
    initialValue?: string;
  }>();

  const formKitCountry = ref();
  const selected = ref();
  const query = ref("");

  if (props.initialValue) {
    selected.value = countries.find(
      (country) =>
        country.name.toLowerCase() ==
        props.initialValue?.toLocaleLowerCase(),
    );
    formKitCountry.value = props.initialValue;
  }

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
      formKitCountry.value = selected.value.name.toLowerCase();
    } else {
      formKitCountry.value = null;
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
    @apply absolute right-6 top-5 transform transition-transform duration-300;
  }

  .country_options {
    @apply absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg focus:outline-none;
  }

  .country_option {
    @apply cursor-pointer px-6 py-2 text-base;
  }
</style>
