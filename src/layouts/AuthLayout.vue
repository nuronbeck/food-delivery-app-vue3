<template>
  <div :class="$style.wrapper">
    <div :class="$style.auth">
      <RouterLink to="/" :class="$style.authLogo">
        <img src="@/assets/header/main_logo.svg" />
      </RouterLink>
      <div>
        <RouterView />
      </div>
    </div>

    <div :class="$style.authLayout">
      <div :class="$style.authLayoutTitle">
        <h2>Strengthen the Guci`an bond</h2>
      </div>
      <div :class="$style.authLayoutText">
        <p>
          Connecting Alumni and students of Government engineering college
          Idukki to a next level
        </p>
      </div>
      <div :class="$style.swiperCircle">
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.auth {
  position: relative;
}
.authLogo {
  img {
    margin: 15px 0 0 15px;
    @include breakpoint("md") {
      margin: 30px 0 0 30px;
    }
  }
}
.authLayout {
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
.authLayoutTitle {
  font-family: $base-font;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 42px;
  color: $color-white;
}

.authLayoutText {
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: $color-white;
}

.swiperCircle {
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
