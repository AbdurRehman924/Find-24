<script lang="ts" setup>
  const emits = defineEmits<{
    (e: "goNext"): void;
    (e: "goBack"): void;
  }>();

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const input1 = ref<HTMLInputElement | null>(null);
  const input2 = ref<HTMLInputElement | null>(null);
  const file1 = ref();
  const file2 = ref();
  const error1 = ref("");
  const error2 = ref("");

  function handleFileUpload1() {
    if (input1.value && input1.value.files) {
      file1.value = input1.value.files[0];
      if (file1.value.size > MAX_SIZE) {
        file1.value = null;
        error1.value = `File size should be maximum 5MB`;
      } else {
        error1.value = "";
      }
    }
  }

  function handleFileUpload2() {
    if (input2.value && input2.value.files) {
      file2.value = input2.value.files[0];
      if (file2.value.size > MAX_SIZE) {
        file2.value = null;
        error2.value = `File size should be maximum 5MB`;
      } else {
        error2.value = "";
      }
    }
  }

  function submitHandler() {
    if (!file1.value) {
      error1.value = "Identity verification document is required";
    }
    if (!file2.value) {
      error2.value = "Address verification document is required";
    }
    if (file1.value && file2.value) {
      emits("goNext");
    }
  }
</script>

<template>
  <section class="flex grow flex-col">
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Upload Documents
    </h2>
    <form
      @submit.prevent="submitHandler"
      class="flex grow flex-col justify-between gap-6 py-6"
    >
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
              accept="image/png, image/jpeg, image/jpg, application/pdf"
              style="display: none"
              @change="handleFileUpload1"
            />
          </label>
          <p v-if="error1" class="text-grenadier">{{ error1 }}</p>
          <p class="py-4 text-dark_corduroy" v-else>
            <span v-if="file1">{{ file1.name }}</span>
            <span v-else>No files added yet</span>
          </p>
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
              accept="image/png, image/jpeg, image/jpg, application/pdf"
              style="display: none"
              @change="handleFileUpload2"
            />
          </label>
          <p v-if="error2" class="text-grenadier">{{ error2 }}</p>
          <p class="py-4 text-dark_corduroy" v-else>
            <span v-if="file2">{{ file2.name }}</span>
            <span v-else>No files added yet</span>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between"
      >
        <button
          class="flex items-center justify-center gap-2 rounded-full border border-chinese-white px-6 py-3"
          @click.prevent="emits('goBack')"
        >
          <IconsLeftArrow />
          <span>Previous</span>
        </button>
        <FormKit
          type="submit"
          label="Next Step"
          outer-class="shadow-variant5"
          input-class="font-semibold border-none flex gap-2 items-center justify-center px-6 py-3 focus:border focus:border-chinese-white"
        >
          <span>Register</span>
          <IconsRightArrow />
        </FormKit>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
