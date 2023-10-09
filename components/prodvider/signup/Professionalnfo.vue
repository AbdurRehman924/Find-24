<script lang="ts" setup>
  const emits = defineEmits<{
    (e: "goNext"): void;
    (e: "goBack"): void;
  }>();

  function submitHandler() {
    emits("goNext");
  }
</script>

<template>
  <section class="flex grow flex-col px-4 sm:px-8 xl:px-16">
    <h2 class="font-semibold sm:text-lg xl:text-2xl">
      Professional Information
    </h2>
    <FormKit
      type="form"
      form-class="py-6 grow flex flex-col gap-6 justify-between"
      :actions="false"
      @submit="submitHandler"
    >
      <div>
        <FormKit
          type="text"
          name="service"
          outer-class="w-full pb-2"
          input-class="bg-saltpan text-dark_corduroy focus:border-palma focus:text-dark-jungle-green"
          label-class="mb-2 font-medium inline-block"
          label="Add Service"
          placeholder="e.g. Plumber"
          validation="required"
          :validation-messages="{
            required: 'Atleast one service is required',
          }"
        />
        <div class="py-2">
          <label
            for="experience"
            class="mb-2 inline-block text-sm font-medium"
            >Experience</label
          >
          <SharedExperiencePicker />
        </div>
        <FormKit
          type="textarea"
          name="bio"
          rows="10"
          columns="10"
          outer-class="w-full py-2"
          input-class="bg-saltpan text-dark_corduroy resize-none focus:text-dark-jungle-green focus:border-palma"
          label-class="mb-2 font-medium inline-block"
          label="Write your bio"
          placeholder="Write something about yourself"
          validation="required"
          :validation-messages="{
            required: 'Bio is required',
          }"
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
          input-class="font-semibold border-none flex gap-2 items-center justify-center px-6 py-3"
        >
          <span>Next Step</span>
          <IconsRightArrow />
        </FormKit>
      </div>
    </FormKit>
  </section>
</template>

<style scoped></style>
