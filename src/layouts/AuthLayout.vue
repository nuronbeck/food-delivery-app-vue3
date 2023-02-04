<template>
  <div :class="$style.authLayout">
    <div :class="$style.main">
      <router-link to="/" :class="$style.wrapper">
        <img src="@/assets/header/main_logo.svg" />
      </router-link>
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div :class="$style.right">
      <div :class="$style.title">
        <h2>Strengthen the Guci`an bond</h2>
      </div>
      <div :class="$style.text">
        <p>
          Connecting Alumni and students of Government engineering college
          Idukki to a next level
        </p>
      </div>
      <div :class="$style.circle">
        <span></span>
        <span :class="$style.active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.authLayout {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.main {
  position: relative;
}

.wrapper {
  img {
    margin: 30px 0 0 30px;
  }
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: center;
  background-color: $color-primary;
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

.active {
  opacity: 1;
}

@include breakpoint("sm") {
  .authLayout {
    grid-template-columns: 1fr;
  }
  .right {
    display: none;
  }
  .wrapper {
    img {
      margin: 15px 0 0 15px;
    }
  }
}
</style>
