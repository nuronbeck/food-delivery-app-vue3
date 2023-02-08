<template>
  <main class="page-content">
    <form :class="$style.signUp" @submit.prevent>
      <h1>Sign Up</h1>

      <BaseAlert
        v-if="!!serverError"
        :class="$style.alert"
        variant="danger"
        :message="serverError"
      />

      <BaseAlert
        v-if="!!serverSuccess"
        :class="$style.alert"
        variant="success"
        :message="serverSuccess"
      />

      <BaseInput
        label="First Name"
        placeholder="First Name"
        :value="formData.firstName"
        :error="errors.firstName"
        @on-input="(value) => changeField('firstName', value)"
      />

      <BaseInput
        label="Last Name"
        placeholder="Last Name"
        :value="formData.lastName"
        :error="errors.lastName"
        @on-input="(value) => changeField('lastName', value)"
      />

      <BaseInput
        label="Email"
        placeholder="name@example.com"
        :value="formData.email"
        :error="errors.email"
        @on-input="(value) => changeField('email', value)"
      />

      <BaseInput
        label="Phone number"
        placeholder="+998 (99) 324-42-91"
        :value="formData.phoneNumber"
        :error="errors.phoneNumber"
        @on-input="(value) => changeField('phoneNumber', value)"
      />

      <BaseInput
        :class="$style.baseInput"
        label="Password"
        placeholder="min. 8 characters"
        :value="formData.password"
        type="password"
        :showPassword="showPassword"
        :error="errors.password"
        @onPasswordToggle="showPasswordClick"
        @on-input="(value) => changeField('password', value)"
      />

      <BaseButton
        variant="primary"
        :class="$style.baseBtn"
        @on-click="register"
        :loading="isLoading"
      >
        Register
      </BaseButton>
      <div :class="$style.text">
        Do you want to out ?
        <RouterLink to="/auth/login" class="link"> Login </RouterLink>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref<boolean>(false);
const showPassword = ref(false);
const serverError = ref("");
const serverSuccess = ref("");

const formData = ref({
  lastName: "",
  firstName: "",
  email: "",
  phoneNumber: "",
  password: "",
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
});

const showPasswordClick = () => {
  showPassword.value = !showPassword.value;
};

const changeField = (
  propertyName: "firstName" | "lastName" | "email" | "phoneNumber" | "password",
  value: string
) => {
  formData.value[propertyName] = value;
};

const register = () => {
  isLoading.value = true;

  authStore
    .register({
      lastName: formData.value.lastName,
      firstName: formData.value.firstName,
      email: formData.value.email,
      phoneNumber: formData.value.phoneNumber,
      password: formData.value.password,
    })
    .then((response) => {
      (serverError.value = ""), (serverSuccess.value = response.data.message);
      router.push("/profile");
    })
    .catch((error) => {
      const serverError = error.response.data;

      serverError.value = serverError.message;

      if (serverError.errors.lastName) {
        errors.value.lastName = serverError.errors.lastName;
      }

      if (serverError.errors.firstName) {
        errors.value.firstName = serverError.errors.firstName;
      }

      if (serverError.errors.email) {
        errors.value.email = serverError.errors.email;
      }

      if (serverError.errors.phoneNumber) {
        errors.value.phoneNumber = serverError.errors.phoneNumber;
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
.alert {
  margin-bottom: 16px;
}

.name {
  color: $color-dark;
  font-size: 32px;
  font-family: $base-font;
  margin-bottom: 40px;
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

.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
</style>
