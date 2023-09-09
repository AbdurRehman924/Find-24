<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Find24` : "Find24";
    },
  });
  const route = useRoute();
  if (route.query["token"]) {
    const { token } = route.query;
    const { data, error } = await useConfirmEmail(token as string);
    if (data.value) {
      console.log(data.value);
      useModals().emailConfirmSuccessModal.open();
    } else {
      console.log(error.value?.data);
      useModals().emailConfirmFailedModal.open();
      // useModa
    }
  }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
