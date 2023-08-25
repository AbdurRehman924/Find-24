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
    >
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Email address</div>
        <FormKit
          name="email"
          type="email"
          class=""
          placeholder="Enter you email"
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
        />
      </div>
      <div class="mb-8">Forget Password?</div>
      <FormKit type="submit" label="Login" />
    </FormKit>
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
    signinFailed.value = false;
    const { data, error } = await userStore.login(
      formData.email,
      formData.password,
    );
    if (error.value) {
      console.log("login failed");
      signinFailed.value = true;
      return;
    } else {
      console.log("login success");
      console.log(data.value);
    }
  };
</script>
<style lang="postcss" scoped></style>
