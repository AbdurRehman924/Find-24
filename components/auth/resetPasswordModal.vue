<template>
  <div v-if="showConfirmation" class="p-6 text-lg">
    Password updated succesfully. Please
    <button
      @click="useModals().loginModal.open"
      class="text-malachite hover:underline"
    >
      login
    </button>
    with your new password
  </div>
  <div v-else class="w-full p-6 pb-12 md:w-[520px]">
    <div class="mb-6 mt-2 text-2xl font-semibold">Reset password</div>
    <FormKit
      type="form"
      id="login-form"
      @submit="handlePasswordReset"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Password</div>
        <FormKit
          name="password"
          type="password"
          placeholder="Enter your password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="cursor-pointer"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium">Confirm password</div>
        <FormKit
          name="password_confirm"
          type="password"
          placeholder="Confrim your password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="cursor-pointer"
          validation="required|confirm"
          :validation-messages="{
            required: 'Please enter your password again here',
            confirm: 'Passwords do not match',
          }"
        />
      </div>

      <FormKit type="submit" label="Reset Password" />
    </FormKit>
  </div>
</template>
<script setup>
  import { useUserStore } from "@/stores/userStore";

  const invalidCode = ref(false);
  const showConfirmation = ref(false);
  const { resetPasswordToken } = useUserStore();
  const handlePasswordReset = async (formData) => {
    const { data, error } = await useResetPassword().setNewPassword(
      formData.password,
      resetPasswordToken,
    );
    if (data.value) {
      showConfirmation.value = true;
      console.log("data");
      console.log(data);
    } else {
      invalidCode.value = true;
      console.log("error");
      console.log(error);
    }
  };
  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type =
      node.props.type === "password" ? "text" : "password";
  };
</script>
<style lang="postcss" scoped></style>
