<script setup lang="ts">
  const props = defineProps<{
    controller: ReturnType<typeof useModal>;
    title: string;
  }>();
  const emits = defineEmits(["close"]);
  const { controller } = toRefs(props);
  const { isOpen, close } = controller.value;

  const { escape } = useMagicKeys();

  watch(escape, () => {
    if (isOpen.value) {
      close();
      // emits("close");
    }
  });

  const modalContentElement = ref();
  onClickOutside(modalContentElement, () => {
    close();
    // emits("close");
  });
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 overflow-y-hidden bg-dark-jungle-green bg-opacity-50 backdrop-blur-sm"
      >
        <div
          class="lg:-mt-3% flex min-h-screen items-center justify-center text-center"
        >
          <Transition
            enter-active-class="transition ease-out duration-500 transform "
            enter-from-class="opacity-0 -translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              v-if="isOpen"
              id="modal-content"
              ref="modalContentElement"
              class="h-full w-full max-w-[520px] overflow-y-hidden rounded-lg bg-white text-left shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
                class="relative flex h-18 items-center border-b border-chinese-white"
              >
                <div
                  class="absolute top-7 cursor-pointer px-8 hover:font-medium"
                  @click="close"
                >
                  <!-- @click="$emit('close')" -->
                  <IconsCross />
                </div>
                <div class="w-full text-center text-xl font-semibold">
                  {{ props.title }}
                </div>
              </div>
              <div
                class="max-h-[calc(100vh_-_72px)] overflow-y-auto md:max-h-[600px]"
              >
                <slot> </slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
