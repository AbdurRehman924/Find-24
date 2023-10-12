<script lang="ts" setup>
  import { useUserStore } from "~/stores/userStore";

  const emits = defineEmits<{
    (e: "goNext"): void;
  }>();

  const userStore = useUserStore();
  const { user } = userStore;
  const errors = ref<any[]>([]);

  async function submitHandler(values: any) {
    values.gender = user.gender;
    const { error } = await useUpdateUserData(values);
    if (error.value && error.value.data) {
      errors.value = error.value.data.errors;
      return;
    }
    emits("goNext");
  }
</script>

<template>
  <section class="flex grow flex-col px-4 sm:px-8 xl:px-16">
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Personal Information
    </h2>
    <FormKit
      type="form"
      form-class="py-6 grow flex flex-col gap-6 justify-between"
      :actions="false"
      @submit="submitHandler"
    >
      <div>
        <div class="flex flex-col gap-4 pb-2 sm:flex-row">
          <FormKit
            type="text"
            name="firstName"
            outer-class="w-full"
            input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
            label-class="mb-2 inline-block font-medium"
            label="First name"
            :value="user.firstName"
            validation="required"
          />
          <FormKit
            type="text"
            name="lastName"
            outer-class="w-full"
            input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
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
            input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green disabled:cursor-not-allowed"
            :disabled="true"
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
          input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
          label-class="mb-2 font-medium inline-block"
          label="Address"
          :value="user.street"
        />
        <div class="flex flex-col gap-4 py-2 sm:flex-row">
          <div class="flex basis-1/2 gap-4">
            <FormKit
              type="text"
              name="city"
              input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
              label-class="mb-2 font-medium inline-block"
              label="City"
              :value="user.city"
            />
            <FormKit
              type="text"
              name="zipCode"
              input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
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
          <SharedPhoneInput
            :initial-value="user.phone"
            :disabled="true"
          />
        </div>
      </div>
      <div v-if="errors.length > 0">
        <p v-for="error in errors" class="text-sm text-grenadier">
          {{ error.msg }}
        </p>
      </div>
      <FormKit
        type="submit"
        label="Next Step"
        outer-class="ml-auto shadow-variant5 w-full sm:w-auto"
        input-class="font-semibold border-none flex gap-2 items-center justify-center px-6 py-3"
      >
        <span>Next Step</span>
        <IconsRightArrow />
      </FormKit>
    </FormKit>
  </section>
</template>

<style scoped></style>
