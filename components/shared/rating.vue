<template>
  <div class="flex gap-x-1" id="rating">
    <slot name="active" v-for="r in active" />
    <slot name="inactive" v-for="i in inactive" />
  </div>
</template>
<script setup>
  const props = defineProps({
    rating: {
      type: Number,
      default: 3,
    },
  });

  const active = ref(props.rating);
  const inactive = ref(5 - active.value);
</script>
<style scoped></style>
