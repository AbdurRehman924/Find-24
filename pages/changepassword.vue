<template>
  <div class="mx-auto my-28 max-w-2xl px-4">
    <div class="mb-2 text-4xl font-bold">Update your password</div>
    <div class="mb-6 text-dark_corduroy">
      Keep your account secure by changing your password. Enter your
      new password to continue using your account safely. Your safety
      matters to us!
    </div>
    <FormKit
      type="form"
      id="change-password-form"
      @submit="handleChangePassword"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          Current Password
        </div>
        <FormKit
          name="currentPassword"
          type="password"
          placeholder="Enter your old password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="cursor-pointer"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          New Password
        </div>
        <FormKit
          name="password"
          type="password"
          placeholder="Enter new password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="cursor-pointer"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          New Password
        </div>
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
      <button
        @click="useModals().forgotPasswordModal.open"
        class="mb-8 text-sm text-palma"
      >
        Need a new password?
      </button>
      <FormKit type="submit" label="Save Changes" />
    </FormKit>
  </div>
</template>
<script setup>
  const handleChangePassword = async (formValues) => {
    const { currentPassword, password: newPassword } = formValues;
    const { data, error } = await useResetPassword().changePassword(
      currentPassword,
      newPassword,
    );
    console.log(error.value.statusCode);
    if (error.value && error.value.statusCode === 401) {
      // useModals().forgotPasswordModal.open();
      alert("Please enter correct password");
    } else if (error.value) {
      alert("Something went wrong");
    } else {
      alert("Password changed successfully");
    }
  };
  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type =
      node.props.type === "password" ? "text" : "password";
  };
</script>
