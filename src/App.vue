<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
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
