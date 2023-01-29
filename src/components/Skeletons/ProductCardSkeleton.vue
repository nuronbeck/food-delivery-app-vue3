<template>
  <div :class="$style.productCardSkeleton"></div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

export interface IProductCardSkeleton {}

withDefaults(defineProps<IProductCardSkeleton>(), {});
</script>

<style module lang="scss">
.productCardSkeleton {
  border-radius: 16px;
  background-color: $color-grey-lightest;
  width: 100%;
  min-height: 270px;
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
