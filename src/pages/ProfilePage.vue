<template>
  <main class="page-content">
    <div class="container">
      <div :class="$style.content">
        <ProfileSidemenu />
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export interface IProfilePage {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const router = useRouter();
const AuthStore = useAuthStore();
const isLoading = ref<boolean>(false);
const isEditing = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const mapGetters = () => ({
  userData: "user/userData",
});

// const mountet = () => {
//   this.initPage();
// };

// methods: {
//   const mapMutations = () => ({
//     logoutUser: "auth/logout",
//   });

//   .initPage({
//     formData.firstName = userData.firstName;
//     formData.lastName = userData.lastName;
//     formData.email = userData.email;
//     formData.phoneNumber = userData.phoneNumber;
//   });

//   .cancelEditing = () => {
//     (isEditing = false), initPage();
//   };

//   const changeField = (propertyName: "firstName" | "lastName" | "email" | "phoneNumber", value: string) => {
//     formDate.value[propertyName] = value;
//     formData.emailNotifications.value[propertyName] = value;
//   };

//   const saveChangeClick = () => {
//     isLoading = true;

//     setTimeout(() => {
//       isLoading = false;
//       isEditing = false;
//     }, 2500);
//   };
//   const logout = () => {
//     logoutUser();
//     router.push("/");
//   };
// }
</script>

<style module lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @include breakpoint("md") {
    grid-template-columns: 350px 1fr;
  }
}
</style>
