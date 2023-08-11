<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";
  import constants from "~/constants";

  const emits = defineEmits<{
    (e: "changed", range: { min: number; max: number }): void;
  }>();

  const servicesStore = useServicesStore();

  const { minPrice, maxPrice } = storeToRefs(servicesStore);

  const maximumPriceGap = ref(100);
  const leftPercent = ref((minPrice.value / maxPrice.value) * 100);
  const rightPercent = ref(0);
  const minInput = ref<HTMLInputElement>();
  const min = ref(minPrice.value);
  const max = ref(maxPrice.value);

  function handleRangeInput(event: Event) {
    if (min.value < minPrice.value) {
      min.value = minPrice.value;
    }
    if (max.value - min.value < maximumPriceGap.value) {
      if (event.target == minInput.value) {
        min.value = max.value - maximumPriceGap.value;
      } else {
        max.value = min.value + maximumPriceGap.value;
      }
    } else {
      leftPercent.value = (min.value / maxPrice.value) * 100;
      rightPercent.value = 100 - (max.value / maxPrice.value) * 100;
    }
    if (min.value != minPrice.value || max.value != maxPrice.value) {
      emits("changed", { min: min.value, max: max.value });
    }
  }

  async function handleReset() {
    await servicesStore.removeFacet(constants.PRICE_FACET, true);
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
          :max="maxPrice"
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
          :max="maxPrice"
          v-model="max"
          @input="handleRangeInput"
        />
      </div>
      <div class="mt-5 flex justify-between">
        <span>$ 0</span> <span>$ {{ maxPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
