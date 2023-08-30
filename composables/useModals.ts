const modals = {
  login: modalController(),
  signup: modalController(),
  forgotPassword: modalController(),
  resetPassword: modalController(),
};
const closeModals = () => {
  let modal: keyof typeof modals;
  for (modal in modals) {
    if (modals[modal].isOpen.value) {
      modals[modal].close();
    }
  }
};
export const useModals = () => {
  return {
    loginModal: modals.login,
    signupModal: modals.signup,
    forgotPasswordModal: modals.forgotPassword,
    resetPasswordModal: modals.resetPassword,
  };
};
function modalController() {
  const isOpen = ref(false);

  function open() {
    closeModals();
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
}
