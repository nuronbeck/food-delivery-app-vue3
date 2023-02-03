<template>
  <a
    href="#"
    :class="classnames($style.category, { [$style.isSelected]: selected })"
    @click.prevent="handleClick"
  >
    <img :class="$style.categoryImg" :src="image" />
    <div :class="$style.categoryName">{{ title }}</div>
  </a>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface ICategoryCard {
  image?: string;
  title: string;
  selected: boolean;
}

withDefaults(defineProps<ICategoryCard>(), {
  selected: false,
});

const emit = defineEmits<{
  (e: "on-click"): void;
}>();

const handleClick = () => {
  emit("on-click");
};
</script>

<style module lang="scss">
.category {
  outline: 2px solid $color-grey-lightest;
  border-radius: 16px;
  background: $color-white;
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    outline: 2px solid $color-primary;
    background-color: $color-grey-lightest;
  }

  &:focus-visible {
    outline: 1px solid $color-primary;
  }
}

.categoryImg {
  padding: 12px 0;
}

.categoryName {
  font-family: $base-font;
  font-size: 13px;
  font-weight: 700;
  color: $color-grey-dark;
  line-height: 18px;
  letter-spacing: 0.1px;
  padding: 0 0 12px 0;
}

.isSelected {
  outline: 2px solid $color-primary;

  &:hover {
    outline: 2px solid $color-primary;
    background-color: unset;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
  }
}
</style>
