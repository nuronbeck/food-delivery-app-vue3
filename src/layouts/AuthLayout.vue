<template>
  <RouterLink to="/" :class="$style.logo">
    <img src="@/assets/header/main_logo.svg" />
  </RouterLink>
  <div :class="$style.wrapper">
    <div :class="$style.auth">
      <div>
        <RouterView />
      </div>
    </div>

    <div :class="$style.layout">
      <div :class="$style.title">
        <h3 :class="$style.carouselTitle">Strengthen the Guci`an bond</h3>
      </div>
      <div :class="$style.text">
        <p>
          Connecting Alumni and students of Government engineering college
          Idukki to a next level
        </p>
      </div>
      <div :class="$style.circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  @include breakpoint("md") {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
.auth {
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @include breakpoint("md") {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
  }
}
.logo {
  img {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
.layout {
  background-color: $color-primary;
  display: none;
  flex-direction: column;
  justify-content: end;
  text-align: center;
  height: 100vh;
  @include breakpoint("md") {
    display: flex;
  }
}
.title {
  font-family: $base-font;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 42px;
  color: $color-white;
}

.text {
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: $color-white;
}

.carouselTitle {
  color: $color-white;
}

.circle {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  span {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    opacity: 0.3;
    border-radius: 50%;
    background-color: $color-white;
  }
}
</style>
