<template>
  <main>
    <BaseAlert variant="secondary" message="BaseAlert Message" />
    <BaseButton variant="danger" @on-click="handleButtonClick"
      >sasasasasasa</BaseButton
    >
  </main>
</template>

<script setup lang="ts">
const handleButtonClick = () => {
  console.log("Button clicked from parent");
};
</script>
