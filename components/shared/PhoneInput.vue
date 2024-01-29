<template>
  <div class="auth-input relative flex w-full text-dark_corduroy">
    <Combobox as="div" v-model="selected" class="basis-2/5">
      <div
        class="combobox rounded-l-lg border border-chinese-white focus-within:border-palma focus-within:text-dark-jungle-green"
      >
        <ComboboxInput
          :disabled="disabled"
          :displayValue="
            (country: any) => country.flag + country.dial_code
          "
          @change="query = $event.target.value"
          placeholder="Code"
          class="rounded-lg bg-saltpan disabled:cursor-not-allowed"
        />
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
                {{ country.dial_code }}
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </Combobox>
    <FormKit
      type="tel"
      name="_phone"
      input-class="rounded-l-none bg-saltpan focus:border-palma focus:text-dark-jungle-green disabled:cursor-not-allowed"
      v-model="phoneNumber"
      :disabled="disabled"
    />
    <FormKit
      :wrapper-class="{ hidden: true }"
      type="tel"
      name="phone"
      id="phone"
      validation="required"
      :validation-messages="{
        required: 'Please add your phone number',
      }"
      v-model="formKitPhone"
    />
  </div>
  <ul class="formkit-messages">
    <li
      class="formkit-message"
      data-message-type="validation"
      v-for="error in errors"
    >
      {{ error["phone"] }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from "@headlessui/vue";
  import countries from "@/data/countries.json";
  import parsePhoneNumber from "libphonenumber-js";

  const props = defineProps<{
    initialValue?: string;
    disabled?: boolean;
  }>();

  const formKitPhone = ref();
  const phoneNumber = ref();
  const selected = ref();
  const query = ref("");

  const errors = ref<{ [key: string]: string }[]>([]);

  if (props.initialValue) {
    const parsed = parsePhoneNumber(props.initialValue);
    if (parsed) {
      selected.value = countries.find(
        (country) => country.code == parsed.country,
      );
      phoneNumber.value = parsed.nationalNumber;
      formKitPhone.value = parsed.formatInternational();
    }
  }

  const filtererdCountries = computed(() =>
    query.value === ""
      ? countries
      : countries.filter(
          (country) =>
            country.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(
                query.value.toLowerCase().replace(/\s+/g, ""),
              ) ||
            country.dial_code.includes(query.value) ||
            country.code.toLowerCase().includes(query.value),
        ),
  );

  function validatePhone() {
    errors.value = [];
    if (selected.value && phoneNumber.value) {
      const parsed = parsePhoneNumber(
        phoneNumber.value,
        selected.value.code,
      );
      if (parsed && parsed.isValid()) {
        formKitPhone.value = parsed.formatInternational();
      } else {
        errors.value.push({ phone: "Invalid phone number" });
        formKitPhone.value = null;
      }
    } else {
      formKitPhone.value = null;
    }
  }
  watch(selected, validatePhone);

  watch(phoneNumber, validatePhone);
</script>

<style lang="postcss">
  .combobox {
    @apply h-full w-full;
  }

  .combobox input {
    @apply h-full w-full border-none px-6 py-4 outline-0
        focus:border-none focus:ring-0;
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
