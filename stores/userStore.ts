import { defineStore } from "pinia";
import { User } from "~/types/user";
import { newUser } from "~/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    authToken: "",
    refreshToken: "",
    resetPasswordToken: "",
    user: {} as User,
  }),
  actions: {
    async login(email: string, password: string) {
      const { data, error } = await useLogin(email, password);
      if (data.value && data.value.code === 200) {
        this.authToken = data.value.data.token;
        this.refreshToken = data.value.data.refreshToken;
      }
      await this.fetchUserProfileData();
      return { data, error };
    },
    async signup(newUser: newUser, redirect: string) {
      const { data, error } = await useSignup(newUser, redirect);
      return { data, error };
    },
    setResetPasswordToken(token: string) {
      this.resetPasswordToken = token;
    },
    setAuthandRefreshToken(token: string, refreshToken: string) {
      this.authToken = token;
      this.refreshToken = refreshToken;
    },
    logout() {
      this.$reset();
      // this.authToken = "";
      // this.refreshToken = "";
      // this.resetPasswordToken = "";
      // this.user = {} as User;
    },
    async fetchUserProfileData() {
      try {
        const { data, error } = await useGetUserData();
        if (error.value) {
          console.log(error.value);
          return;
        } else {
          this.user = data.value!.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfileData(user: User) {
      const { res, error } = await useUpdateUserData(user);
      console.log(res.value);
      console.log(res.value?.code);

      if (res.value && res.value.code === 200) {
        this.user = { ...this.user, ...user };
      }

      return { res, error };
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken;
    },
    profileCompleted(state) {
      return state.user.profileCompleted;
    },
  },
  persist: true,
});
