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
      :validation="[['required'], ['date_before', maxDOB()]]"
      :validation-messages="{
        required: 'Date of birth is required',
        date_before: 'You must be at least 16 years old',
      }"
      v-model="formKitDate"
    />
  </div>
</template>

<script setup lang="ts">
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";
  const maxDOB = () => {
    const maxDateOfBirth = new Date();
    maxDateOfBirth.setFullYear(maxDateOfBirth.getFullYear() - 16);
    console.log(maxDateOfBirth.toISOString().substring(0, 10));

    return maxDateOfBirth.toISOString().substring(0, 10);
  };
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

<style lang="postcss" scoped></style>
