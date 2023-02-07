import { ref } from "vue";
import { defineStore } from "pinia";
import API from "@/api/API";

export const useAuthStore = defineStore("authStore", () => {
  const isLoggedIn = ref(false);

  const checkAuth = () => {
    return API.getAuth().then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const login = () => {
    return API.getLogin().then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const logout = () => {
    localStorage.removeItem("foodDeliveryAppToken");
    isLoggedIn.value = false;
  };

  return { isLoggedIn, checkAuth, logout, login };
});
