import { defineStore } from "pinia";
// import global from '../Helper'

export const useStore = defineStore({
  id: "movies",
  state: () => ({
    movie: [],
  }),
  getters: {
      doubleCount: (state) => state.counter * 2,
      getMovie() {
          
      }
    // getToken() {
    //   if (this.user) {
    //     let user = global.decrypt(this.user, import.meta.env.VITE_ENCRYPT_KEY);
    //     return user.token;
    //   }
    // },

    // getUser() {
    //   if (this.user) {
    //     let user = global.decrypt(this.user, import.meta.env.VITE_ENCRYPT_KEY);
    //     return user.user;
    //   }
    // },
  },
  actions: {
    increment() {
      this.counter++;
    },
    // saveUserToken(user) {
    //   this.user = global.encrypt(
    //     JSON.stringify(user),
    //     import.meta.env.VITE_ENCRYPT_KEY
    //   );
    // },
  },
  persist: true,
});