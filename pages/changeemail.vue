<template>
  <div class="mx-auto my-28 max-w-2xl px-4">
    <div class="mb-2 text-4xl font-bold">Email Change</div>
    <div class="mb-6 text-dark_corduroy">
      New Email Address Only Updated Once You Verified
    </div>
    <FormKit
      type="form"
      id="change-email-form"
      @submit="handleChangeEmail"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      incomplete-message="Please fill all the fields"
    >
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          Current Email
        </div>
        <FormKit
          name="currentPassword"
          type="email"
          placeholder="Enter your old email"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          New Email
        </div>
        <FormKit
          name="email"
          type="email"
          placeholder="Enter new email"
          validation="required|length:6,60"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2 text-sm font-medium text-dark-jungle-green">
          Confirm New Email
        </div>
        <FormKit
          name="email_confirm"
          type="email"
          placeholder="Confrim your email"
          validation="required|confirm"
          :validation-messages="{
            required: 'Please enter your email again here',
            confirm: 'emails do not match',
          }"
        />
      </div>

      <FormKit type="submit" label="Save Changes" />
    </FormKit>
  </div>
</template>
<script setup>
  const handleChangeEmail = async (formValues) => {};
</script>
