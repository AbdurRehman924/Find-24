<template>
  <div class="w-[560px] p-6">
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
    >
      <div class="mb-4 flex">
        <div class="w-1/2 pr-2">
          <div class="mb-2 text-sm font-medium">First Name</div>
          <FormKit type="text" class="" />
        </div>
        <div class="w-1/2 pl-2">
          <div class="mb-2 text-sm font-medium">Last Name</div>
          <FormKit type="text" class="" />
        </div>
      </div>

      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Email address</div>
        <FormKit type="email" class="" />
      </div>
      <div class="mb-2">
        <div class="mb-2 text-sm font-medium">
          Create a strong password
        </div>
        <FormKit
          type="password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
        />
      </div>
      <div class="mb-4 text-sm text-corduroy">
        Password must have 8 characters,numbers or special characters
      </div>
      <div class="mb-4 flex">
        <div class="w-1/2 pr-2">
          <div class="mb-2 text-sm font-medium">Gender</div>
          <FormKit type="select" :options="['A', 'B']" class="" />
        </div>
        <div class="w-1/2 pl-2">
          <div class="mb-2 text-sm font-medium">Date of birth</div>
          <SharedDatepicker />
        </div>
      </div>
      <div class="mb-4 flex">
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
        <div class="text-palma">Sign-in instead</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const submitted = ref(false);
  const submitHandler = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    submitted.value = true;
  };
  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type =
      node.props.type === "password" ? "text" : "password";
  };
</script>
<style lang="postcss" scoped></style>
