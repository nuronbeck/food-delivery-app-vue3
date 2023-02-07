<template>
  <div :class="$style.login">
    <h3>Login</h3>

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

    <BaseInput
      label="Email"
      type="email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      :disabled="isLoading"
      @on-input="(value) => changeField('email', value)"
    />

    <BaseInput
      :class="$style.baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      :disabled="isLoading"
      @onPasswordToggle="showPasswordClick"
      @on-input="(value) => changeField('password', value)"
    />

    <BaseButton
      variant="primary"
      :class="$style.baseBtn"
      :loading="isLoading"
      @on-click="login"
    >
      Login
    </BaseButton>

    <RouterLink to="/auth/forgot-password" :class="$style.forgotLink"
      >Forgot password</RouterLink
    >

    <div :class="$style.text">
      Don`t have an account?<RouterLink to="/auth/sign-up" :class="$style.link">
        Sign up</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export interface ILoginView {
  email: string;
  password: string;
}

const router = useRouter();
const authStore = useAuthStore();
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

  authStore
    .login({
      email: formData.value.email,
      password: formData.value.password,
    })
    .then(() => {
      router.push("/profile");
    })
    .catch((error) => {
      const serverError = error.response.data;

      serverError.value = serverError.message;

      if (serverError.errors.email) {
        errors.value.email = serverError.errors.email;
      }

      if (serverError.errors.password) {
        errors.value.password = serverError.errors.password;
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
};
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
