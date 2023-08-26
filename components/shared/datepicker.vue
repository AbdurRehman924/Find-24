<template>
  <div class="auth-input">
    <VueDatePicker
      v-model="date"
      placeholder="Date of Birth"
      auto-apply
      :enable-time-picker="false"
      aria-label="Date of Birth"
    />
    <FormKit
      :wrapper-class="{ hidden: true }"
      type="date"
      name="dob"
      validation="required"
      :validation-messages="{
        required: 'Date of birth is required',
      }"
      v-model="formKitDate"
    />
  </div>
</template>

<script setup lang="ts">
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";

  const date = ref();
  const formKitDate = ref();
  watch(date, () => {
    if (date.value) {
      formKitDate.value = date.value.toISOString().substring(0, 10);
    } else {
      formKitDate.value = null;
    }
  });
</script>

<style lang="postcss" scoped>
  input {
    @apply border-palma outline-none;
  }
</style>
