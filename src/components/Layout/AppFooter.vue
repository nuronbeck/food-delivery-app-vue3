<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.wrapper">
        <div>
          <div :class="$style.logo">
            <RouterLink to="/">
              <img src="@/assets/footer/logo-white.svg" />
            </RouterLink>
          </div>
          <font-awesome-icon
            :class="$style.icon"
            icon="fa-brands fa-facebook-f"
          />
          <font-awesome-icon :class="$style.icon" icon="fa-brands fa-twitter" />
          <font-awesome-icon
            :class="$style.icon"
            icon="fa-brands fa-instagram"
          />
          <font-awesome-icon :class="$style.icon" icon="fa-brands fa-youtube" />
          <font-awesome-icon
            :class="$style.icon"
            icon="fa-brands fa-linkedin-in"
          />
        </div>

        <div>
          <span :class="$style.header">Response</span>
          <a :class="$style.link">How it works</a>
          <a :class="$style.link">Guarantee</a>
          <a :class="$style.link">Security</a>
          <a :class="$style.link">Pricing</a>
        </div>

        <div>
          <span :class="$style.header">Company</span>
          <a :class="$style.link">About us</a>
          <a :class="$style.link">Prices</a>
          <a :class="$style.link">Blog</a>
          <a :class="$style.link">License</a>
        </div>

        <div>
          <span :class="$style.header">Support</span>
          <a :class="$style.link">Getting started</a>
          <a :class="$style.link">Help center</a>
          <a :class="$style.link">Report a bug</a>
          <a :class="$style.link">Contact us</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.footer {
  color: $color-neutral-black;
  background-color: $color-neutral-black;
  padding: 48px 0;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  @include breakpoint("md") {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  div:nth-child(n + 2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    @include breakpoint("md") {
      margin-bottom: 0;
    }
  }
}

.logo {
  margin-bottom: 16px;
}
.icon {
  background-color: $color-grey;
  width: 20px;
  height: 20px;
  border-radius: 24px;
  padding: 6px;
  margin-bottom: 40px;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    background-color: $color-white;
  }
}

.header {
  color: $color-white;
  font-family: $base-font;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
}

.link {
  color: $color-grey-light;
  font-family: $base-font;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
