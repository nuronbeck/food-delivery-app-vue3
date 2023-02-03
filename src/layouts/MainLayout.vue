<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { RouterView } from "vue-router";

const { y } = useWindowScroll();

watch(y, (newValue) => {
  if (y.value === 80) {
    console.log("Height is more 80", newValue);
  }
});
</script>
