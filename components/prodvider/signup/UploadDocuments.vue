<script lang="ts" setup>
  const emits = defineEmits<{
    (e: "goNext"): void;
    (e: "goBack"): void;
  }>();

  const { uploadDocuments } = useProvideServices();

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const documents = reactive<
    {
      title: string;
      file: Blob | null;
      error: string;
    }[]
  >([
    {
      title: "Upload identity verification",
      file: null,
      error: "",
    },
    {
      title: "Upload address verification",
      file: null,
      error: "",
    },
  ]);

  const pending = ref(false);

  function handleFileChange(file: Blob, index: number) {
    if (!file) {
      documents[index].error = "Could not upload file try again";
    } else if (file.size > MAX_SIZE) {
      documents[index].error = "File size is too large";
    } else {
      documents[index].error = "";
      documents[index].file = file;
    }
  }

  async function submitHandler() {
    let isValid = true;
    documents.forEach((doc) => {
      if (!doc.file) {
        doc.error = "Please upload a file";
        isValid = false;
      }
    });
    if (isValid) {
      const formData = new FormData();
      documents.forEach((doc) => {
        if (doc.file) {
          formData.append(doc.title, doc.file);
        }
      });
      pending.value = true;
      const { data, error } = await uploadDocuments(formData);
      pending.value = false;
      if (error.value && error.value.data) {
        return;
      }
      emits("goNext");
    }
  }
</script>

<template>
  <section class="flex grow flex-col px-4 sm:px-8 xl:px-16">
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Upload Documents
    </h2>
    <form
      @submit.prevent="submitHandler"
      class="flex grow flex-col justify-between gap-6 py-6"
    >
      <div class="flex flex-col gap-4 sm:flex-row">
        <SharedFileInput
          v-for="(document, index) in documents"
          :key="index"
          :title="document.title"
          :file="document.file"
          :error="document.error"
          @changed="(file) => handleFileChange(file, index)"
        />
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
          :input-class="{
            'font-semibold border-none px-6 py-3 disabled:cursor-not-allowed disabled:bg-opacity-50': true,
            '!px-16': pending,
          }"
          :disabled="pending"
        >
          <p
            class="flex items-center justify-center gap-2"
            v-if="!pending"
          >
            <span>Register</span>
            <IconsRightArrow />
          </p>
          <SharedSpinner v-else />
        </FormKit>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
