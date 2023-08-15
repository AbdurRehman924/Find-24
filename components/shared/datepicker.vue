<template>
  <div
    class="auth-input"
    :class="{
      // 'field-error': errorMessage,
    }"
  >
    <VueDatePicker
      v-model="date"
      placeholder="Date of Birth"
      auto-apply
      :enable-time-picker="false"
      aria-label="Date of Birth"
    />
    <!-- <input type="date" name="dob" style="display: none" /> -->
    <!-- <FormKit type="date" style="display: none" /> -->
    <!-- <span class="error" v-if="errorMessage">{{ errorMessage }}</span> -->
  </div>
</template>

<script setup lang="ts">
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";

  const date = ref();

  // const { errorMessage, value } = useField(
  //   "dob",
  //   yup
  //     .date()
  //     .required("Date of birth is required")
  //     .max(
  //       new Date(
  //         new Date().setFullYear(new Date().getFullYear() - 16),
  //       ),
  //       "You must be atleast 16 years old",
  //     ),
  // );

  watch(date, () => {
    if (date.value) {
      // value.value = date.value.toISOString();
    }
  });
</script>

<style lang="postcss" scoped>
  /* @import "~/assets/css/auth.css"; */
  /* .auth-input {
    input[type="date"] {
      @apply h-full w-full border-none px-6 py-4 outline-none
      focus:border-none focus:ring-0;
    }
  } */
  input{
    @apply border-palma outline-none;
  }
</style>
