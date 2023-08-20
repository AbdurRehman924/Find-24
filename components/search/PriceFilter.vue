<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";

  const emits = defineEmits<{
    (e: "changed", range: { min: number; max: number }): void;
    (e: "applyFilter"): void;
  }>();

  const servicesStore = useServicesStore();

  const { overAllMinPrice, overAllMaxPrice, minPrice, maxPrice } =
    storeToRefs(servicesStore);

  const maximumPriceGap = ref(100);
  const leftPercent = ref(
    (minPrice.value / overAllMaxPrice.value) * 100,
  );

  const rightPercent = ref(
    100 - (maxPrice.value / overAllMaxPrice.value) * 100,
  );

  const minInput = ref<HTMLInputElement>();
  const min = ref(minPrice.value);
  const max = ref(maxPrice.value);

  function handleRangeInput(event: Event) {
    if (min.value < overAllMinPrice.value) {
      min.value = overAllMinPrice.value;
    }
    if (max.value > overAllMaxPrice.value) {
      max.value = overAllMaxPrice.value;
    }
    if (max.value - min.value < maximumPriceGap.value) {
      if (event.target == minInput.value) {
        min.value = max.value - maximumPriceGap.value;
      } else {
        max.value = min.value + maximumPriceGap.value;
      }
    } else {
      leftPercent.value = (min.value / overAllMaxPrice.value) * 100;
      rightPercent.value =
        100 - (max.value / overAllMaxPrice.value) * 100;
    }
    if (min.value != minPrice.value || max.value != maxPrice.value) {
      emits("changed", { min: min.value, max: max.value });
    }
  }

  async function handleReset() {
    await servicesStore.removeFacet(constants.PRICE_FACET, true);
  }

  function handleApplyFilter() {
    emits("applyFilter");
  }
</script>

<template>
  <div class="py-6 text-sm text-dark_corduroy">
    <div class="mb-5 flex justify-between">
      <h4 class="font-medium text-dark-jungle-green">Price Range</h4>
      <button class="text-xs" @click="handleReset">Reset</button>
    </div>
    <div>
      <div class="relative h-1 rounded-2xl bg-chinese-white">
        <div
          class="absolute h-full rounded-2xl bg-palma"
          :style="`left: ${leftPercent}%; right: ${rightPercent}%`"
        ></div>
      </div>
      <div class="range-input">
        <label for="min-price" class="sr-only">Minimum price</label>
        <input
          type="range"
          class="range-min"
          name="min-price"
          :min="0"
          :max="overAllMaxPrice"
          v-model="min"
          ref="minInput"
          @input="handleRangeInput"
        />
        <label for="max-price" class="sr-only">Maximum price</label>
        <input
          type="range"
          class="range-max"
          name="max-price"
          :min="0"
          :max="overAllMaxPrice"
          v-model="max"
          @input="handleRangeInput"
        />
      </div>
      <div class="mt-5 flex justify-between">
        <span>$ 0</span> <span>$ {{ overAllMaxPrice }}</span>
      </div>
    </div>
    <button
      class="ml-auto hidden rounded-full bg-palma px-3 py-2 font-medium text-white hover:bg-islamic-green md:block"
      @click="handleApplyFilter"
    >
      Apply
    </button>
  </div>
</template>

<style scoped></style>
