<template>
  <div>
    <h3 :class="$style.name">Address</h3>

    <div :class="$style.info">
      <h2 :class="$style.title">Address page</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface IAddressPage {}
</script>

<style module lang="scss">
.info {
  background: $color-white;
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  // height: 100vh;
}

.title {
  font-family: $base-font;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
  color: $color-dark;
}
</style>
