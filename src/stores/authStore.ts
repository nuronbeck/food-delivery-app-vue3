import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import client from 'api'

export const useAuthStore = defineStore("authStore", () => {
  const isLoggedIn = ref(false);

  const isAuth = computed(() => isLoggedIn.value);

  const checkAuth = () => {
    // return client.post("/api/auth", {}, {
    //   headers: {
    //     Authorization: localStorage.getItem('foodDeliveryAppToken')
    //   }
    // })
    // .then((response: any) => {
    //   isLoggedIn.value = true
    //   localStorage.setItem("foodDeliveryAppToken", response.data.token);
    //   return response
    // })
  };

  return { isLoggedIn, isAuth, checkAuth };
});
