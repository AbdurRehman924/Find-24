export const useModal = () => {
  const isOpen = ref(false);

  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  return {
    isOpen: computed(() => isOpen.value),
    open,
    close,
  };
};
