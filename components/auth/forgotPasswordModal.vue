<template>
  <div v-if="!showConfirmation" class="w-full p-6 pb-12 md:w-[520px]">
    <div class="mb-6 mt-2 text-2xl font-semibold">
      Forgot your Password?
    </div>

    <FormKit
      type="form"
      id="login-form"
      @submit="handleResetPassword"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div v-if="showError" class="text-sm text-grenadier">
        You don't have an account with us yet
      </div>
      <div class="mb-2">
        <div class="mb-2 text-sm font-medium">Email address</div>
        <FormKit
          :wrapper-class="{ 'bg-black': true }"
          :input-class="{ 'border-black': true }"
          name="email"
          type="email"
          class=""
          placeholder="name@youremail.com"
          validation="required|email"
        />
      </div>
      <div class="mb-8 text-sm text-corduroy">
        Enter the email address associated with your account, and
        we’ll email you a link to reset your password.
      </div>
      <FormKit type="submit" label="Send reset link" />
    </FormKit>
  </div>
  <div v-if="showConfirmation" class="w-full p-6 pb-12 md:w-[520px]">
    Email is on the way
    <div>
      We have sent an email with password reset information to
      mo****e@ou***.com.
    </div>
    <div>
      if you don’t see the email, make sure the email address is
      correct and check your spam folder.
    </div>
  </div>
</template>
<script setup>
  import { useUserStore } from "@/stores/userStore";
  const userStore = useUserStore();
  const submitted = ref(false);
  const signinFailed = ref(false);
  const showConfirmation = ref(false);
  const showError = ref(false);

  const handleResetPassword = async (formData) => {
    console.log("login submitted", formData);
    const { data, error } = await useFindAccount(formData.email);
    if (data.value) {
      showConfirmation.value = true;
    } else {
      showError.value = true;
    }
  };
</script>
<style lang="postcss" scoped></style>
