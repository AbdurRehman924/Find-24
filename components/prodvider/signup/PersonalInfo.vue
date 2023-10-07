<script lang="ts" setup>
  import { useUserStore } from "~/stores/userStore";

  const userStore = useUserStore();
  const { user } = userStore;
</script>

<template>
  <section>
    <h2 class="font-semibold">Personal Information</h2>
    <FormKit type="form" form-class="py-6" :actions="false">
      <FormKit
        type="text"
        name="firstName"
        outer-class="mb-2"
        input-class="bg-saltpan text-dark_corduroy"
        label-class="mb-2 font-medium"
        label="First name"
        :value="user.firstName"
        validation="required"
      />
      <FormKit
        type="text"
        name="lastName"
        outer-class="my-2"
        input-class="bg-saltpan text-dark_corduroy"
        label-class="mb-2 font-medium"
        label="Last name"
        :value="user.lastName"
      />
      <FormKit
        type="email"
        name="email"
        outer-class="my-2"
        input-class="bg-saltpan text-dark_corduroy"
        label-class="mb-2 font-medium"
        label="Email Address"
        :value="user.email"
      />
      <div class="bg-saltpan">
        <SharedDatepicker :initialValue="user.dob" />
      </div>
      <FormKit
        type="text"
        name="street"
        outer-class="my-2"
        input-class="bg-saltpan text-dark_corduroy"
        label-class="mb-2 font-medium"
        label="Address"
        :value="user.street"
      />
      <div class="flex gap-4">
        <FormKit
          type="text"
          name="city"
          outer-class="my-2"
          input-class="bg-saltpan text-dark_corduroy"
          label-class="mb-2 font-medium"
          label="City"
          v-model="user.city"
        />
        <FormKit
          type="text"
          name="zipCode"
          outer-class="my-2"
          input-class="bg-saltpan text-dark_corduroy"
          label-class="mb-2 font-medium"
          label="Zip Code"
          :value="user.zipCode"
        />
      </div>
      <div class="my-2">
        <label for="country" class="mb-2 font-semibold"
          >Country</label
        >
        <SharedCountryPicker :initialValue="user.country" />
      </div>
      <div class="my-2">
        <label for="country" class="mb-2 font-semibold"
          >Phone Number</label
        >
        <SharedPhoneInput :initial-value="user.phone" />
      </div>
      <FormKit
        type="submit"
        label="Next Step"
        outer-class="mt-8 shadow-variant5"
        input-class="font-semibold border-none flex gap-2 items-center justify-center"
      >
        <span>Next Step</span>
        <IconsRightArrow />
      </FormKit>
    </FormKit>
  </section>
</template>

<style scoped></style>
