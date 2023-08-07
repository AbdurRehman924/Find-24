<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";
  import Places, { Feature } from "~/types/mapbox";

  const { searchPlaces } = useMapBox();

  const query = ref("");
  const places = ref<Places | null>();
  const selected = ref<Feature | null>(null);

  function handleReset() {
    query.value = "";
    selected.value = null;
  }

  watch(query, async () => {
    const { data } = await searchPlaces(query.value);
    places.value = data.value;
  });

  watch(selected, () => {
    console.log(selected.value);
  });
</script>

<template>
  <Combobox as="template" v-model="selected">
    <div class="flex items-center px-6 py-3">
      <div class="grow text-sm text-corduroy">
        <h4 class="font-semibold text-dark-jungle-green">Location</h4>
        <ComboboxInput
          class="w-full"
          placeholder="Enter prefered address..."
          @change="query = $event.target.value"
          :display-value="
            () => (selected ? selected.place_name : query)
          "
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
          v-for="feature in places?.features"
          :key="feature.id"
          :value="feature"
          class="flex items-center gap-4 border-b-0.5 border-chinese-white p-4 text-corduroy"
          :class="{
            'bg-frostee font-medium text-palma':
              selected?.id === feature.id,
          }"
        >
          <IconsPin />
          <span>{{ feature.place_name }}</span>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<style scoped></style>