<template>
  <main class="page-content">
    <div class="container">
      <div :class="$style.dealsList">
        <DealCard
          v-for="(dealCard, index) in dealsList"
          :key="`dealCard__${index}`"
          :variant="dealCard.variant"
          :title="dealCard.title"
          :offer="dealCard.offer"
          :tag="dealCard.tag"
        />
      </div>

      <div :class="$style.categoryList">
        <CategoryCard
          v-for="(categoryCard, index) in categoryList"
          :key="`categoryCard__${index}`"
          :title="categoryCard.name"
          :image="categoryCard.image"
          :selected="categoryCard.id === selectedCategory"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dealsList from "@/data/dealList";
import client from "@/api";
import type { IProductCategory } from "@/types";

const categoryList = ref<IProductCategory[]>([]);
const selectedCategory = ref(null);

client.get("/api/categories").then(({ data: { data = [] } = {} }) => {
  categoryList.value = data as IProductCategory[];
});
</script>

<style module lang="scss">
.dealsList {
  grid-template-columns: 1fr;
  display: grid;
  gap: 30px;
  margin-bottom: 32px;

  @include breakpoint("md") {
    grid-template-columns: repeat(2, 1fr);
  }
}

.categoryList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @include breakpoint("md") {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
