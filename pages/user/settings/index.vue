<template>
  <div class="mb-6">
    <div class="mb-2 text-2xl font-semibold">Personal Info</div>
    <div class="text-sm text-dark_corduroy">
      Update your photo and personal details here
    </div>
  </div>

  <!-- Avatar block -->
  <div class="mb-6 flex items-center gap-x-6">
    <div class="relative w-fit">
      <img
        class="rounded-full"
        src="https://placehold.co/107x107"
        alt=""
      />
      <IconsCameragreen class="absolute bottom-0 right-0" />
    </div>
    <div class="flex flex-col gap-y-4">
      <!-- buttons -->
      <div class="flex gap-x-4 text-sm font-medium">
        <button
          class="flex h-11 w-[162px] items-center justify-center gap-x-2 rounded-full bg-palma text-white"
        >
          <IconsUpload />
          Upload New
        </button>
        <button
          class="h-11 w-[162px] rounded-full bg-provincial-pink text-grenadier"
        >
          Delete Avatar
        </button>
      </div>

      <!-- bottom text -->
      <div class="text-xs text-dark_corduroy">
        *image size should be at least 320px big,and less then 500kb.
        Allowed files .png and .jpg
      </div>
    </div>
  </div>

  <!-- Personal info update form -->
  <div>
    firstName: {{ firstName }} - lastName:
    {{ lastName }}
  </div>
  <FormKit
    type="form"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    :v-modal="{
      firstName: firstName,
      lastName: lastName,
    }"
  >
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">First name</div>
        <FormKit
          type="text"
          name="firstName"
          placeholder="First Name"
          class=""
          validation="required|length:3,50|alpha:latin"
          :validation-messages="{
            required: 'First name is required',
            length: 'First name must be at least 3 characters',
            alpha: 'Only use letters',
          }"
        />
      </div>
      <div>
        <div class="mb-2 text-sm font-medium">Last name</div>
        <FormKit
          type="text"
          name="lastName"
          placeholder="Last Name"
          class=""
          validation="required|length:3,50|alpha:latin"
          :validation-messages="{
            required: 'Last name is required',
            alpha: 'Only use letters',
            length: 'Last name must be at least 3 characters',
          }"
        />
      </div>
    </div>
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">Gender</div>
        <FormKit
          type="select"
          name="gender"
          :options="['male', 'female', 'other']"
          class=""
          placeholder="Select Gender"
          validation="required"
        />
      </div>
      <div>
        <div class="mb-2 text-sm font-medium">Date of birth</div>
        <SharedDatepicker />
      </div>
    </div>
    <div class="row">
      <div class="full">
        <div class="mb-2 text-sm font-medium">Address</div>
        <FormKit
          type="text"
          name="address"
          placeholder="Enter you address"
          validations="required"
        ></FormKit>
      </div>
    </div>
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">Country</div>
        <SharedCountryPicker />
      </div>
      <div class="flex gap-x-4">
        <div class="w-1/2">
          <div class="mb-2 text-sm font-medium">City</div>
          <FormKit type="text"></FormKit>
        </div>
        <div class="w-1/2">
          <div class="mb-2 text-sm font-medium">Zip Code</div>
          <FormKit type="text"></FormKit>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="h-14 w-44">
        <FormKit type="submit" label="Save Changes" />
      </div>
    </div>
  </FormKit>
</template>
<script setup>
  import { useUserStore } from "@/stores/userStore";
  import { storeToRefs } from "pinia";
  const userStore = storeToRefs(useUserStore());
  // console.log(userStore.user.value);
  const { firstName, lastName } = userStore.user.value;
</script>
<style lang="postcss" scoped>
  .row {
    @apply mb-4 flex gap-x-6;

    > div {
      @apply w-1/2;
    }
    .full {
      @apply w-full;
    }
  }
</style>
