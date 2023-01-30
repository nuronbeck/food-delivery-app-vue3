<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.content">
          <div :class="$style.logo">
            <a href="#">
              <img
                :class="$style.logoImg"
                src="@/assets/header/main_logo.svg"
              />
            </a>
          </div>

          <div :class="$style.icons">
            <a href="#" :class="$style.iconItem">
              <img
                :class="$style.iconImg"
                src="@/assets/footer/facebook-f.svg"
              />
            </a>

            <a href="#" :class="$style.iconItem">
              <img :class="$style.iconImg" src="@/assets/footer/twitters.svg" />
            </a>

            <a href="#" :class="$style.iconItem">
              <img
                :class="$style.iconImg"
                src="@/assets/footer/instagram.svg"
              />
            </a>

            <a href="#" :class="$style.iconItem">
              <img :class="$style.iconImg" src="@/assets/footer/Youtube.svg" />
            </a>
          </div>

          <div :class="$style.text">
            &copy; 2023 Food delivery kit. All Rights Reserved.
          </div>
        </div>

        <div :class="$style.servers">
          <div :class="$style.serverContent">
            <h1 :class="$style.serverTitle">Responses</h1>
            <a href="#" :class="$style.serverLink">How it works</a>
            <a href="#" :class="$style.serverLink">Guarantee</a>
            <a href="#" :class="$style.serverLink">Security</a>
            <a href="#" :class="$style.serverLink">Pricing</a>
          </div>

          <div :class="$style.serverContent">
            <h1 :class="$style.serverTitle">Company</h1>
            <a href="#" :class="$style.serverLink">About us</a>
            <a href="#" :class="$style.serverLink">Prices</a>
            <a href="#" :class="$style.serverLink">Blog</a>
            <a href="#" :class="$style.serverLink">License</a>
          </div>

          <div :class="$style.serverContent">
            <h1 :class="$style.serverTitle">Support</h1>
            <a href="#" :class="$style.serverLink"> Getting started </a>
            <a href="#" :class="$style.serverLink"> Help center </a>
            <a href="#" :class="$style.serverLink"> Report a bug </a>
            <a href="#" :class="$style.serverLink"> Contact us </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.footer {
  background-color: $color-grey-dark;
}

.wrapper {
  padding: 48px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoint("xs") {
    grid-template-columns: repeat(1, 1fr);
  }

  @include breakpoint("sm") {
    grid-template-columns: repeat(1, 1fr);
  }

  @include breakpoint("md") {
    grid-template-columns: repeat(2, 1fr);
  }
}

.content {
  display: grid;
  grid-auto-columns: repeat(3, 1fr);

  @include breakpoint("xs") {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  @include breakpoint("sm") {
    grid-template-columns: repeat(2, 1fr);
    text-align: start;
  }

  @include breakpoint("md") {
    grid-template-columns: repeat(1, 1fr);
    text-align: start;
  }
}

.logo {
  margin-bottom: 16px;
}

.icons {
  width: 150px;
  justify-content: center;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5px;
}
.iconItem {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  margin: 0 5px;
  padding: 1px;
  border-radius: 50%;
  background-color: $color-grey;
  transition: all 0.2s linear;

  &:hover {
    background-color: $color-white;
  }
}
.iconImg {
  height: 15px;
  width: 15px;
  opacity: 0.7;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
}

.text {
  font-size: 13px;
  font-weight: 400;
  color: $color-error-light;

  @include breakpoint("xs") {
    display: none;
  }

  @include breakpoint("sm") {
    display: none;
  }

  @include breakpoint("md") {
    display: block;
  }
}

.servers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @include breakpoint("xs") {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  @include breakpoint("sm") {
    grid-template-columns: repeat(3, 1fr);
    text-align: start;
  }

  @include breakpoint("md") {
    grid-template-columns: repeat(3, 1fr);
    text-align: start;
  }
}

.serverTitle {
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 700;
  font-family: $base-font;
  color: $color-white;

  @include breakpoint("xs") {
    margin-top: 20px;
  }

  @include breakpoint("sm") {
    margin-top: 0;
  }

  @include breakpoint("md") {
    margin-top: 0;
  }
}

.serverLink {
  margin-bottom: 10px;
  display: block;
  font-size: 13px;
  font-weight: 400;
  font-family: $base-font;
  color: $color-grey-light;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    text-decoration: underline;
    color: $color-white;
  }
}
</style>
