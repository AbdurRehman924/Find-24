<script setup>
  const emailSent = ref(false);
  const resendVerificationEmail = async () => {
    console.log("resend");
    const route = useRoute();
    const { token } = route.query;
    const { data, error } = await useResendVerficationEmail(token);
    emailSent.value = true;
  };
</script>
<template>
  <div v-if="emailSent" class="p-6">
    <div class="text-2xl font-medium">Email sent</div>
    <div class="text-corduroy">
      Please check your email for the verification link
    </div>
  </div>
  <div v-if="!emailSent" class="flex flex-col items-end gap-y-2 p-6">
    <div class="w-full text-2xl font-medium">
      Invalid token. Verification failed
    </div>
    <div class="w-full text-corduroy">
      Invalid or expired token please use the button below to resend
      verification email
    </div>
    <button
      @click="resendVerificationEmail"
      class="mt-3 mr-2 w-fit rounded-full bg-malachite px-6 py-3 text-sm font-semibold text-white hover:bg-palma"
    >
      Resend
    </button>
  </div>
</template>
