<template>
  <footer :class="$style.footer">
    <div class="container">
      <span>Footer</span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.footer {
  min-height: 80px;
  color: $color-white;
  background-color: $color-primary;
}
</style>
