<template>
  <div :class="$style.product">
    <div
      :class="$style.productImage"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span :class="$style.productFeatured"> featured </span>
    </div>
    <div :class="$style.productBody">
      <div>
        <div :class="$style.productTitle">{{ title }}</div>
        <div :class="$style.productCount">
          <img src="@/assets/product/shopping.svg" />
          <span :class="$style.productCounter">4</span>
        </div>
      </div>
      <div :class="$style.productText">
        <img src="@/assets/product/clock.svg" />
        <p>{{ deliveryTime }}</p>
        <span :class="$style.productDot"></span>
        <p>{{ minimalOrder }}</p>
      </div>
      <div :class="$style.productTags">
        <div
          :class="$style.productTag"
          v-for="tag in categories"
          :key="`productTag__${tag}`"
        >
          <img :src="tag.image" v-if="true" />
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

export interface IProductCard {
  image: string;
  title: string;
  deliveryTime: string;
  minimalOrder: string;
  categories: {
    id: string;
    name: string;
    image: string;
  }[];
}

withDefaults(defineProps<IProductCard>(), {
  image:
    "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
});
</script>

<style module lang="scss">
.product {
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;
}
.productImage {
  position: relative;
  height: 160px;
  border-radius: 16px 16px 0 0;
  background-size: cover;
}

.productFeatured {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 8px 16px;
  font-family: $base-font;
  font-weight: bold;
  font-size: 11px;
  color: $color-white;
  text-transform: uppercase;
  border-radius: 0 16px;
  background-color: $color-primary;
}

.productBody {
  padding: 16px;

  div {
    display: flex;
    align-items: center;

    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
    }
  }
}

.productTitle {
  color: $color-dark;
  font-family: $base-font;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 6px;
}

.productCount {
  position: relative;
  cursor: pointer;
  .productCounter {
    color: $color-white;
    position: absolute;
    top: -12px;
    right: 0;
    font-family: $base-font;
    font-size: 10px;
    line-height: 1;
    font-weight: bold;
    background-color: $color-primary;
    padding: 3px;
    min-width: 14px;
    text-align: center;
    border-radius: 6px;
  }
}

.productText {
  margin-bottom: 14px;

  p {
    color: $color-grey;
    font-family: $base-font;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 7px;
  }
}

.productDot {
  width: 3px;
  height: 3px;
  background-color: $color-primary;
  border-radius: 50%;
  margin-left: 8px;
}

.productTags {
  display: grid;
  grid-template-columns: auto;
  gap: 6px;
}

.productTag {
  color: $color-grey-dark;
  cursor: pointer;
  font-family: $base-font;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  padding: 4px 10px;
  background: $color-grey-lightest;
  border-radius: 100px;

  img {
    margin-right: 8px;
  }
}
</style>
