<template>
  <div :class="$style.login">
    <h1 :class="$style.name">Login</h1>

    <BaseAlert
      v-if="!!serverError"
      :class="$style.baseAlert"
      variant="danger"
      :message="serverError"
    />

    <BaseAlert
      v-if="!!serverSuccess"
      :class="$style.baseAlert"
      variant="success"
      :message="serverSuccess"
    />
    <!-- ========Base inputs========= -->
    <BaseInput
      label="Email"
      type="email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />

    <BaseInput
      :class="$style.baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)"
    />

    <!-- ===========Base button========== -->
    <BaseButton
      variant="primary"
      :class="$style.baseBtn"
      @onClick="login"
      :loading="isLoading"
    >
      Login
    </BaseButton>

    <RouterLink to="/auth/forgot-password" :class="$style.forgotLink"
      >Forgot password</RouterLink
    >

    <div :class="$style.text">
      Don`t have an account?<RouterLink to="/auth/sign" :class="$style.link">
        Sign up</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";

export interface ILoginView {
  email: string;
  password: string;
}

const isLoading = ref<boolean>(false);
const showPassword = ref(false);
const serverError = ref("");
const serverSuccess = ref("");
const formData = ref({
  email: "",
  password: "",
});
const errors = ref({
  email: "",
  password: "",
});

const showPasswordClick = () => {
  showPassword.value = !showPassword.value;
};

const changeField = (propertyName: "email" | "password", value: string) => {
  formData.value[propertyName] = value;
};

const login = () => {
  isLoading.value = true;
};

const authStore = useAuthStore();

authStore.login();
isLoading.value = true;
</script>

<style module lang="scss">
/* FORM*/
.login {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.baseAlert {
  margin-bottom: 16px;
}

.name {
  color: $color-dark;
  font-size: 32px;
  line-height: 82px;
  font-family: $base-font;
  font-weight: 700;
  letter-spacing: 0.1px;
}

.baseInput {
  margin-bottom: 28px !important;
}

.baseBtn {
  width: 100%;
  margin-bottom: 35px;
}

.forgotLink {
  color: $color-primary;
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin-bottom: 110px;
  text-decoration: none;
  &:hover {
    color: $color-primary;
  }
}

.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.link {
  font-size: 14px;
  color: $color-primary;
  text-decoration: none;
}

// @media screen and (max-width: 768px) {
//   .login {
//     transform: translateX(-50%) translateY(-40%);
//     width: 95%;

//     &__name {
//       font-size: 60px;
//     }

//     &__text {
//       display: block;
//       color: $color-grey-dark;
//       font-family: $base-font;
//       font-weight: 400;
//       font-size: 14px;
//       margin-bottom: 45px;
//       line-height: 20px;
//       letter-spacing: 0.1px;
//     }

//     &__link {
//       padding-bottom: 32px;
//     }
//   }
// }
</style>
