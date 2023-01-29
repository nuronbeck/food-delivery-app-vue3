<template>
  <main class="page-content">
    <div class="container">
      <BaseAlert variant="primary" :message="`Email: ${formData.email}`" />
      <br />
      <BaseAlert variant="danger" :message="`Password: ${formData.password}`" />
      <br />

      <BaseInput
        label="Email"
        type="email"
        placeholder="name@example.com"
        :value="formData.email"
        @on-input="(newValue) => changeField('email', newValue)"
      />

      <BaseInput
        label="Password"
        type="password"
        placeholder="min.8 characters"
        :value="formData.password"
        :showPassword="showPassword"
        @on-input="(newValue) => changeField('password', newValue)"
        @on-password-toggle="toggleShowPassword"
      />

      <BaseButton @on-click="submit">Submit</BaseButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showPassword = ref(false);

const formData = ref({
  email: "",
  password: "",
});

const changeField = (propertyName: "email" | "password", value: string) => {
  formData.value[propertyName] = value;
};

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const submit = () => {
  console.log("email", formData.value.email);
  console.log("password", formData.value.password);
};
</script>
