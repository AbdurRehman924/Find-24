<template>
  <div class="w-full p-6 pb-12 md:w-[520px]">
    <template v-if="!emailConfirmed">
      <div class="mb-6 mt-2 text-2xl font-semibold">
        Forgot your Password?
      </div>

      <FormKit
        type="form"
        id="login-form"
        @submit="handleEmailConfirmation"
        :actions="false"
        :config="{ validationVisibility: 'submit' }"
        incomplete-message="Please fill all the fields"
      >
        <div v-if="emailError" class="text-sm text-grenadier">
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
    </template>
    <template v-if="emailConfirmed">
      <div class="mb-6 mt-2 text-2xl font-semibold">
        Enter the code
      </div>
      <div class="mb-6">
        We have sent an email with password reset information to your
        email address.
      </div>
      <div class="mb-6">
        if you don’t see the email, make sure the email address is
        correct and check your spam folder.
      </div>
      <div v-if="invalidCode" class="text-sm text-grenadier">
        Invalid Code
      </div>
      <FormKit
        type="form"
        id="login-form"
        @submit="handleResetCodeVerification"
        :actions="false"
        :config="{ validationVisibility: 'dirty' }"
        incomplete-message="Please fill all the fields"
      >
        <div class="mb-6">
          <div class="mb-2 text-sm font-medium">Code</div>

          <FormKit
            :wrapper-class="{ 'bg-black': true }"
            :input-class="{ 'border-black': true }"
            name="resetCode"
            type="text"
            class=""
            placeholder="x x x x"
            validation="required|number"
            validation-label="Reset Code"
          />
        </div>
        <FormKit type="submit" label="Send reset link" />
      </FormKit>
    </template>
  </div>
</template>
<script setup>
  const emailConfirmed = ref(false);
  const emailError = ref(false);
  const showConfirmation = ref(false);
  const invalidCode = ref(false);
  // const showError = ref(false);

  const handleEmailConfirmation = async (formData) => {
    const { data, error } = await useResetPassword().sendResetCode(
      formData.email,
    );
    if (data.value) {
      emailConfirmed.value = true;
    } else {
      emailError.value = true;
    }
  };
  const handleResetCodeVerification = async (formData) => {
    const { data, error } =
      await useResetPassword().verifyResetCode(formData.resetCode);
    if (data.value) {
      invalidCode.value = false;
      showConfirmation.value = true;
      await new Promise(
        (resolve) =>
          setTimeout(() => {
            useModals().resetPasswordModal.open();
            resolve;
          }),
        2000,
      );
    } else {
      invalidCode.value = true;
    }
  };
</script>
<style lang="postcss" scoped></style>
