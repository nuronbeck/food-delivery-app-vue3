<template>
  <div :class="$style.page">
    <h1>This is an about page</h1>
  </div>
</template>

<style module lang="scss">
.page {
  min-height: 100vh;
  background-color: $color-white;
  transition: background-color 0.5s linear;

  @include breakpoint("md") {
    background-color: $color-grey-light;
  }

  @include breakpoint("lg") {
    background-color: $color-grey;
  }
}
</style>
