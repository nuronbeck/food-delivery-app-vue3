<template>
  <main>
    <BaseAlert variant="secondary" message="BaseAlert Message" />
    <BaseButton variant="danger" @on-click="handleButtonClick"
      >sasasasasasa</BaseButton
    >
    <BaseSpinner variant="secondary" />
    <font-awesome-icon icon="fa-eye" />
    <BaseCheckbox label="dhsadasjd" @onChange="toggleCheckbox" />
  </main>
</template>

<script setup lang="ts">
const handleButtonClick = () => {
  console.log("Button clicked from parent");
};

const toggleCheckbox = () => {
  console.log("checkbox clicked ");
};
</script>
