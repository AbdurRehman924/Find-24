<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";
  import Places from "~/types/mapbox";
  import useServicesStore from "~/stores/services";
  import { storeToRefs } from "pinia";

  const { searchPlaces } = useMapBox();
  const servicesStore = useServicesStore();

  const query = ref("");
  const places = ref<Places | null>();
  const { location } = storeToRefs(servicesStore);

  function handleReset() {
    query.value = "";
    if (location.value) {
      servicesStore.resetLocation();
    }
  }

  watch(query, async () => {
    const { data } = await searchPlaces(query.value);
    places.value = data.value;
  });
</script>

<template>
  <Combobox as="template" v-model="location">
    <div class="flex items-center px-6 py-3 sm:p-0">
      <div class="grow text-sm">
        <h4 class="font-semibold">Location</h4>
        <ComboboxInput
          class="w-full border-none p-0"
          placeholder="Enter prefered address..."
          @change="query = $event.target.value"
          :display-value="
            () => (location ? location.place_name : query)
          "
          autocomplete="off"
        />
      </div>
      <button
        role="reset"
        v-if="query || location"
        @click="handleReset"
      >
        <IconsCross />
      </button>
      <ComboboxOptions
        class="absolute inset-x-0 top-56 z-10 max-h-64 overflow-auto bg-white sm:left-[40%] sm:right-[20%] sm:top-20 sm:max-h-80 sm:rounded-2xl"
      >
        <ComboboxOption
          v-for="feature in places?.features"
          :key="feature.id"
          :value="feature"
          v-slot="{ selected, active }"
          as="template"
        >
          <li
            class="flex cursor-pointer items-center gap-4 border-b-0.5 border-chinese-white p-4 text-corduroy hover:bg-frostee hover:font-medium hover:text-palma sm:border-none"
            :class="{
              'bg-frostee font-medium text-palma': selected,
              'bg-frostee': active,
            }"
          >
            <IconsPin />

            <span>{{ feature.place_name }}</span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>
