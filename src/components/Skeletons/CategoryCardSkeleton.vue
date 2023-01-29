<template>
  <div :class="$style.categoryCardSkeleton"></div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

export interface ICategoryCardSkeleton {}

withDefaults(defineProps<ICategoryCardSkeleton>(), {});
</script>

<style module lang="scss">
.categoryCardSkeleton {
  border-radius: 16px;
  background-color: $color-grey-lightest;
  width: 100%;
  min-height: 80px;
  animation-name: skeletonShimmer;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition: all 2s ease-in-out;
}

@keyframes skeletonShimmer {
  0% {
    background-color: $color-grey-lightest;
  }

  50% {
    background-color: $color-grey-light;
  }

  100% {
    background-color: $color-grey-lightest;
  }
}
</style>
