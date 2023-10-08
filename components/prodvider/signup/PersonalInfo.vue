<script lang="ts" setup>
  import { useUserStore } from "~/stores/userStore";

  const userStore = useUserStore();
  const { user } = userStore;
</script>

<template>
  <section>
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Personal Information
    </h2>
    <FormKit type="form" form-class="py-6" :actions="false">
      <div class="flex flex-col gap-4 pb-2 sm:flex-row">
        <FormKit
          type="text"
          name="firstName"
          outer-class="w-full"
          input-class="bg-saltpan text-dark_corduroy"
          label-class="mb-2 inline-block font-medium"
          label="First name"
          :value="user.firstName"
          validation="required"
        />
        <FormKit
          type="text"
          name="lastName"
          outer-class="w-full"
          input-class="bg-saltpan text-dark_corduroy"
          label-class="mb-2 font-medium inline-block"
          label="Last name"
          :value="user.lastName"
        />
      </div>
      <div class="flex flex-col gap-4 py-2 sm:flex-row">
        <FormKit
          type="email"
          name="email"
          outer-class="w-full"
          input-class="bg-saltpan text-dark_corduroy"
          label-class="mb-2 font-medium inline-block"
          label="Email Address"
          :value="user.email"
        />
        <div class="w-full bg-saltpan">
          <label for="dob" class="mb-2 inline-block font-medium"
            >Date of birth</label
          >
          <SharedDatepicker :initialValue="user.dob" />
        </div>
      </div>
      <FormKit
        type="text"
        name="street"
        outer-class="py-2"
        input-class="bg-saltpan text-dark_corduroy"
        label-class="mb-2 font-medium inline-block"
        label="Address"
        :value="user.street"
      />
      <div class="flex flex-col gap-4 py-2 sm:flex-row">
        <div class="flex basis-1/2 gap-4">
          <FormKit
            type="text"
            name="city"
            input-class="bg-saltpan text-dark_corduroy"
            label-class="mb-2 font-medium inline-block"
            label="City"
            v-model="user.city"
          />
          <FormKit
            type="text"
            name="zipCode"
            input-class="bg-saltpan text-dark_corduroy"
            label-class="mb-2 font-medium inline-block"
            label="Zip Code"
            :value="user.zipCode"
          />
        </div>
        <div class="grow">
          <label for="country" class="mb-2 inline-block font-medium"
            >Country</label
          >
          <SharedCountryPicker :initialValue="user.country" />
        </div>
      </div>
      <div class="py-2 sm:w-1/2">
        <label for="phone" class="mb-2 inline-block font-medium"
          >Phone Number</label
        >
        <SharedPhoneInput :initial-value="user.phone" />
      </div>
      <FormKit
        type="submit"
        label="Next Step"
        outer-class="mt-6 ml-auto shadow-variant5 sm:max-w-fit"
        input-class="font-semibold border-none flex gap-2 items-center justify-center px-6 py-3"
      >
        <span>Next Step</span>
        <IconsRightArrow />
      </FormKit>
    </FormKit>
  </section>
</template>

<style scoped></style>
