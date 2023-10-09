<script lang="ts" setup>
  const emits = defineEmits<{
    (e: "goNext"): void;
    (e: "goBack"): void;
  }>();

  const input1 = ref<HTMLInputElement | null>(null);
  const input2 = ref<HTMLInputElement | null>(null);

  function submitHandler() {
    emits("goNext");
  }
</script>

<template>
  <section class="grow">
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Upload Documents
    </h2>
    <form @submit.prevent="" class="py-6">
      <div class="flex flex-col gap-4 sm:flex-row">
        <div class="flex w-full flex-col gap-2">
          <h3 class="font-medium">Upload identity verification</h3>
          <label
            class="flex cursor-pointer flex-col items-center gap-4 rounded-lg border-2 border-dashed border-chinese-white px-4 py-12 focus:border-palma focus:outline-none"
            tabindex="0"
            @keypress.enter="input1?.click()"
          >
            <IconsUpload />
            <p class="flex flex-col items-center gap-2">
              <span class="text-palma">Choose file</span>
              <span class="text-sm text-dark_corduroy"
                >JPG, PNG or PDF, file size no more than 5MB</span
              >
            </p>
            <input
              ref="input1"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              style="display: none"
            />
          </label>
        </div>
        <div class="flex w-full flex-col gap-2">
          <h3 class="font-medium">Upload address verification</h3>
          <label
            class="flex cursor-pointer flex-col items-center gap-4 rounded-lg border-2 border-dashed border-chinese-white px-4 py-12 focus:border-palma focus:outline-none"
            tabindex="0"
            @keypress.enter="input2?.click()"
          >
            <IconsUpload />
            <p class="flex flex-col items-center gap-2">
              <span class="text-palma">Choose file</span>
              <span class="text-sm text-dark_corduroy"
                >JPG, PNG or PDF, file size no more than 5MB</span
              >
            </p>
            <input
              ref="input2"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              style="display: none"
            />
          </label>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col gap-4 sm:flex-row-reverse sm:justify-between"
      >
        <FormKit
          type="submit"
          label="Next Step"
          outer-class="shadow-variant5"
          input-class="font-semibold border-none flex gap-2 items-center justify-center px-6 py-3 focus:border focus:border-chinese-white"
        >
          <span>Next Step</span>
          <IconsRightArrow />
        </FormKit>
        <button
          class="flex items-center justify-center gap-2 rounded-full border border-chinese-white px-6 py-3"
          @click.prevent="emits('goBack')"
        >
          <IconsLeftArrow />
          <span>Previous</span>
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
