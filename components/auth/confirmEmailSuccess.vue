<template>
  <div class="p-6">
    <div class="mb-2 text-2xl font-medium">
      Your email has been verified
    </div>
    <div class="text-corduroy">
      You can now
      <button
        @click="useModals().loginModal.open"
        class="text-malachite hover:underline"
      >
        login
      </button>
      to your account
    </div>
  </div>
</template>
