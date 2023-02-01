<template>
  <div :class="classnames($style.dealCard, $style[variant])">
    <div :class="$style.image">
      <img src="@/assets/deal/burger.png" alt="burger image" />
    </div>

    <div :class="$style.dealCardContent">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.offer">{{ offer }}</div>
      <div :class="$style.tag">{{ tag }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IDealCard {
  variant?: "bgPrimary" | "bgSecondary" | "offer";
  title: string;
  offer: string;
  tag: string;
}

withDefaults(defineProps<IDealCard>(), {
  variant: "bgPrimary",
  title: "",
  offer: "",
  tag: "",
});
</script>

<style module lang="scss">
.dealCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $color-primary-light;
  border-radius: 16px;
  padding-right: 24px;
}
.bgPrimary {
  background-color: $color-primary-light;
}
.bgSecondary {
  background-color: $color-secondary-light;
}
.offer {
  color: $color-primary;
}
.bgPrimary {
  color: $color-primary;
}
.bgSecondary {
  color: $color-secondary;
}
.offer {
  color: $color-secondary;
}

.image {
  img {
    width: 100%;
    background-size: cover;
  }
}

.title {
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #2b2b43;
}

.offer {
  font-family: $base-font;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.1px;
  padding-bottom: 36px;
}

.tag {
  font-family: $base-font;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: $color-grey;
}
</style>
