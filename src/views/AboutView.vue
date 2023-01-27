<template>
  <main class="page-content">
    <div class="container">
      <h1>This is an about page</h1>

      <div :class="$style.cardsContainer">
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
        <div :class="$style.card"></div>
      </div>
    </div>
  </main>
</template>

<style module lang="scss">
.card {
  width: 100%;
  min-height: 200px;
  background-color: $color-primary;
}

.cardsContainer {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @include breakpoint("md") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint("lg") {
    grid-template-columns: repeat(3, 1fr);
  }

  @include breakpoint("xl") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
