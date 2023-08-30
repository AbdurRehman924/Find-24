<template>
  <div class="p-6">
    <div class="mb-1 mt-2 text-2xl font-semibold">
      Create a free account
    </div>
    <div class="mb-6 text-corduroy">
      Start your journey with Find24
    </div>
    <FormKit
      type="form"
      id="login-form"
      @submit="submitHandler"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div class="mb-4 flex">
        <div class="w-1/2 pr-2">
          <div class="mb-2 text-sm font-medium">First Name</div>
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
        <div class="w-1/2 pl-2">
          <div class="mb-2 text-sm font-medium">Last Name</div>
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

      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Email address</div>
        <FormKit
          type="email"
          name="email"
          class=""
          placeholder="Email Address"
          validation="required|email"
        />
      </div>
      <div class="mb-2">
        <div class="mb-2 text-sm font-medium">
          Create a strong password
        </div>
        <FormKit
          type="password"
          name="password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          placeholder="Password"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4 text-sm text-corduroy">
        Password must have 8 characters,numbers or special characters
      </div>
      <div class="mb-4 flex">
        <div class="w-1/2 pr-2">
          <div class="mb-2 text-sm font-medium">Gender</div>
          <FormKit
            type="select"
            name="gender"
            :options="['Male', 'Female', 'Other']"
            class=""
            placeholder="Select Gender"
            validation="required"
          />
        </div>
        <div class="w-1/2 pl-2">
          <div class="mb-2 text-sm font-medium">Date of birth</div>
          <SharedDatepicker />
        </div>
      </div>
      <div class="mb-4 flex flex-col">
        <div class="mb-2 text-sm font-medium">Country</div>
        <SharedCountryPicker />
      </div>
      <FormKit type="submit">Sign up</FormKit>
    </FormKit>
    <div class="mt-6 flex flex-col gap-y-4 text-center text-corduroy">
      <div class="flex items-center justify-center gap-x-2">
        <div class="w-1/2 border-b border-chinese-white"></div>
        <div>or</div>
        <div class="w-1/2 border-b border-chinese-white"></div>
      </div>
      <div class="flex justify-center gap-x-6">
        <IconsGooglecolored />
        <IconsFacebookcolored />
        <IconsTwittercolored />
      </div>
      <div class="flex justify-center gap-x-1 text-sm">
        Already have an account?
        <div
          class="cursor-pointer text-palma hover:underline"
          @click="useModals().loginModal.open"
        >
          <!-- @click="$router.push({ query: { login: true } })" -->
          Sign-in instead
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const submitted = ref(false);
  const submitHandler = async (formData) => {
    console.log("signup submitted", formData);
  };
  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type =
      node.props.type === "password" ? "text" : "password";
  };
</script>
<style lang="postcss" scoped></style>
