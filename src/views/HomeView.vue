<template>
  <main class="page-content">
    <div class="container">
      <BaseCheckbox
        label="Subscribe to emails"
        :checked="isChecked"
        @on-change="toggleCheckbox"
      />
      <!-- =====BaseInput====== -->
      <BaseInput label="Email" type="email" placeholder="name@example.com" />

      <BaseInput
        class="login__baseInput"
        label="Password"
        type="password"
        :showPassword="showPassword"
        error="salom"
        placeholder="min.8 characters"
        @onPasswordToggle="showPasswordClick"
      />

      <BaseButton @on-click="showClasses">Show result</BaseButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { ref } from "vue";
const isChecked = ref(false);
const showPassword = ref(false);

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};

const showPasswordClick = () => {
  showPassword.value = !showPassword.value;
};

const showClasses = () => {
  const moduleClass = "module-class";

  const result = classnames("class1", "class2", {
    [moduleClass]: isChecked.value,
  });

  console.log(result);
};
</script>
