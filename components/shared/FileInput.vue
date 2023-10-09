<script lang="ts" setup>
  defineProps<{
    title: string;
    file: any;
    error: string;
  }>();

  const emits = defineEmits<{
    (e: "changed", file: any): void;
  }>();

  const input = ref<HTMLInputElement | null>(null);

  function handleFileUpload() {
    if (input.value && input.value.files) {
      emits("changed", input.value.files[0]);
    } else {
      emits("changed", null);
    }
  }
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <h3 class="font-medium">{{ title }}</h3>

    <label
      class="flex cursor-pointer flex-col items-center gap-4 rounded-lg border-2 border-dashed border-chinese-white px-4 py-12 focus:border-palma focus:outline-none"
      tabindex="0"
      @keypress.enter="input?.click()"
    >
      <IconsUpload />
      <p class="flex flex-col items-center gap-2">
        <span class="text-palma">Choose file</span>
        <span class="text-sm text-dark_corduroy"
          >JPG, PNG or PDF, file size no more than 5MB</span
        >
      </p>
      <input
        ref="input"
        type="file"
        accept="image/png, image/jpeg, image/jpg, application/pdf"
        style="display: none"
        @change="handleFileUpload"
      />
    </label>
    <p v-if="error" class="text-grenadier">{{ error }}</p>
    <p class="py-4 text-dark_corduroy" v-else>
      <span v-if="file">{{ file.name }}</span>
      <span v-else>No files added yet</span>
    </p>
  </div>
</template>

<style scoped></style>
