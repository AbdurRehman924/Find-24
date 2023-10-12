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
  <div v-if="!editingMode">
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">First name</div>
        <div>{{ user.firstName }}</div>
      </div>
      <div>
        <div class="mb-2 text-sm font-medium">Last name</div>
        <div>
          {{ user.lastName }}
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">Gender</div>
        {{ user.gender }}
      </div>
      <div>
        <div class="mb-2 text-sm font-medium">Date of birth</div>
        {{ user.dob }}
      </div>
    </div>
    <div class="row">
      <div class="full">
        <div class="mb-2 text-sm font-medium">Address</div>
        {{ user.street }}
      </div>
    </div>
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">Country</div>
        {{ user.country }}
      </div>
      <div class="flex gap-x-4">
        <div class="w-1/2">
          <div class="mb-2 text-sm font-medium">City</div>
          {{ user.city }}
        </div>
        <div class="w-1/2">
          <div class="mb-2 text-sm font-medium">Zip Code</div>
          {{ user.zipCode }}
        </div>
      </div>
    </div>
    <div class="mt-10 flex justify-end">
      <div class="h-14 w-44">
        <button
          @click="editingMode = true"
          class="h-full w-full rounded-full bg-palma font-medium text-white"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
  <FormKit
    v-show="editingMode"
    type="form"
    id="personalInfo"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    @submit="handleProfileUpdate"
  >
    <div class="row">
      <div>
        <div class="mb-2 text-sm font-medium">First name</div>
        <FormKit
          id="firstName"
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
          id="lastName"
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
          id="gender"
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
          id="address"
          type="text"
          name="street"
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
          <FormKit
            id="city"
            type="text"
            name="city"
            validation="required|length3,50"
          ></FormKit>
        </div>
        <div class="w-1/2">
          <div class="mb-2 text-sm font-medium">Zip Code</div>
          <FormKit
            id="zipCode"
            type="text"
            name="zipCode"
            validation="required|length:3,50"
          ></FormKit>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-x-4">
      <div class="h-14 w-44">
        <button
          @click="editingMode = false"
          class="h-full w-full rounded-full bg-provincial-pink font-medium text-grenadier"
        >
          Cancel
        </button>
      </div>
      <div class="h-14 w-44">
        <FormKit type="submit" label="Save Changes" />
      </div>
    </div>
  </FormKit>
</template>
<script setup>
  import { useUserStore } from "@/stores/userStore";
  import { storeToRefs } from "pinia";
  import { getNode } from "@formkit/core";

  const { user } = storeToRefs(useUserStore());
  const { updateProfileData, fetchUserProfileData } = useUserStore();
  const editingMode = ref(false);
  await fetchUserProfileData();

  onMounted(async () => {
    updateFormValues();
  });
  async function handleProfileUpdate(formData) {
    // console.log("submit", formData);
    const { res, error } = await updateProfileData(formData);
    if (error.value) {
      // console.log(error.value);
    } else {
      // console.log(res.value);
      editingMode.value = false;
    }
  }
  function updateFormValues() {
    const personalInfo = getNode("personalInfo");
    const dob = personalInfo.children.filter(
      (child) => child.name === "dob",
    )[0];
    const country = personalInfo.children.filter(
      (child) => child.name === "country",
    )[0];

    getNode("firstName").input(user.value.firstName);
    getNode("lastName").input(user.value.lastName);
    getNode("gender").input(user.value.gender);
    dob.input(user.value.dob);
    country.input(user.value.country);
    getNode("address").input(user.value.street);
    getNode("city").input(user.value.city);
    getNode("zipCode").input(user.value.zipCode);
  }
  watch(editingMode, (val) => {
    if (val == true) {
      // updateFormValues();
    }
  });
</script>
<style lang="postcss" scoped>
  .row {
    @apply flex flex-col;
    @apply sm:flex-row sm:gap-x-6;

    > div {
      @apply sm:w-1/2;
      @apply mb-4;
    }
    .full {
      @apply w-full;
    }
  }
</style>
