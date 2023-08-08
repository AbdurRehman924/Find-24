<template>
  <div class="w-[520px]">
    <div class="flex h-18 items-center border-b border-chinese-white">
      <div class="cursor-pointer px-8" @click="$emit('close')">X</div>
      <div class="w-full text-center text-xl font-semibold">
        Log in
      </div>
    </div>
    <div
      v-if="submitted"
      class="px-4 pt-4 text-center text-malachite"
    >
      Submission successful!
    </div>
    <div class="p-6">
      <div class="mb-6 mt-2 text-2xl font-semibold">Welcome back</div>
      <FormKit
        type="form"
        id="login-form"
        @submit="submitHandler"
        :actions="false"
      >
        <div class="mb-4">
          <div class="mb-2 text-sm font-medium">Email address</div>
          <FormKit type="email" class="" />
        </div>
        <div class="mb-4">
          <div class="mb-2 text-sm font-medium">Password</div>
          <FormKit
            type="password"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
          />
        </div>
        <div class="mb-8">Forget Password?</div>
        <FormKit type="submit" label="Login" />
      </FormKit>
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
