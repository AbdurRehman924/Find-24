<template>
  <div class="mx-auto h-[120px] w-[120px]" ref="animation"></div>
</template>

<script setup>
  import * as animationData from "~/assets/animation.json";

  const animation = ref(null);

  onMounted(async () => {
    const lottie = await import("lottie-web");
    lottie.loadAnimation({
      container: animation.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData.default,
    });
  });
</script>
