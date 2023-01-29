<template>
  <main>
    <BaseAlert variant="secondary" message="BaseAlert Message" />
    <BaseButton variant="danger" @on-click="handleButtonClick"
      >sasasasasasa</BaseButton
    >
    <BaseSpinner variant="secondary" />
    <font-awesome-icon icon="fa-eye" />
    <BaseInput
      class="login__baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :showPassword="showPassword"
      @onPasswordToggle="showPasswordClick"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showPassword = ref(false);
const showPasswordClick = () => (showPassword.value = !showPassword.value);

defineExpose({
  showPasswordClick,
});

const handleButtonClick = () => {
  console.log("Button clicked from parent");
};

// const showPasswordClick = () => {
//   showPassword.value = !showPassword.value;
// };
</script>
