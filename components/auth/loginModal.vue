<template>
  <div class="w-full p-6 md:w-[520px]">
    <div class="mb-6 mt-2 text-2xl font-semibold">Welcome back</div>
    <div class="text-grenadier" v-if="signinFailed">
      Invalid credentials
    </div>
    <FormKit
      type="form"
      id="login-form"
      @submit="handleLogin"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Email address</div>
        <FormKit
          :wrapper-class="{ 'bg-black': true }"
          :input-class="{ 'border-black': true }"
          name="email"
          type="email"
          class=""
          placeholder="Enter you email"
          validation="required|email"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Password</div>
        <FormKit
          name="password"
          type="password"
          placeholder="Enter your password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="cursor-pointer"
          validation="required"
        />
      </div>
      <div
        class="mb-8 cursor-pointer hover:underline"
        @click="$router.push({ query: { forgotPassword: true } })"
      >
        Forgot Password?
      </div>
      <FormKit type="submit" label="Login" />
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
          @click="$router.push({ query: { signup: true } })"
        >
          Sign up instead
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useUserStore } from "@/stores/userStore";
  const userStore = useUserStore();
  const submitted = ref(false);
  const signinFailed = ref(false);
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
  const handleLogin = async (formData) => {
    console.log("login submitted", formData);
    //   signinFailed.value = false;
    //   const { data, error } = await userStore.login(
    //     formData.email,
    //     formData.password,
    //   );
    //   if (error.value) {
    //     console.log("login failed");
    //     signinFailed.value = true;
    //     return;
    //   } else {
    //     console.log("login success");
    //     console.log(data.value);
    //   }
  };
</script>
<style lang="postcss" scoped></style>
