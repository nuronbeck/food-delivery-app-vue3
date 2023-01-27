<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";

const { checkAuth } = useAuthStore();
const isAppLoading = ref(true);

const setupApplication = () => {
  if (localStorage.getItem("foodDeliveryAppToken")) {
    checkAuth();
    // .then(response => {
    //   const { data: { user: { id, firstName, lastName, email, phoneNumber } = {} } = {} } = response;
    //   this.setUserData({
    //     id,
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber
    //   })
    // })
    // .finally(() => {
    //    isAppLoading.value = false;
    // })
  } else {
    isAppLoading.value = false;
  }
};

onMounted(() => {
  setupApplication();
});
</script>

<style lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
  max-width: $breakpoint-lg;
  padding: 0 15px;
}

#app {
  display: flex;
  flex-direction: column;
}

main.page-content {
  flex: 1 1 auto;
  padding: 15px 0;
}
</style>
