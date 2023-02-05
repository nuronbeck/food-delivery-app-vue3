<template>
  <main class="page-content">
    <div class="container" v-if="isLoading">
      <div :class="$style.dealsList">Loading categories</div>
      <div :class="$style.categoryList">Loading products</div>
    </div>

    <div class="container" v-else>
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

      <div :class="$style.productsList">
        <ProductCard
          v-for="product in productsList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :featured="product.featured"
          :title="product.name"
          :deliveryTime="product.deliveryTime"
          :minimalOrder="product.minimalOrder"
          :categories="product.categories"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import dealsList from "@/data/dealList";
import API from "@/api/API";
import type { IProduct, IProductCategory } from "@/types";

const isLoading = ref<boolean>(false);
const selectedCategory = ref<string | null>(null);
const categoryList = ref<IProductCategory[]>([]);
const productsList = ref<IProduct[]>([]);

onMounted(async () => {
  isLoading.value = true;

  const categoriesPromise = API.getCategories();
  const productsPromise = API.getProducts();

  await Promise.all([categoriesPromise, productsPromise]).then(
    ([categories, products]) => {
      categoryList.value = categories;
      productsList.value = products;
    }
  );

  isLoading.value = false;
});

// const selectCategory = ({ id }: IProductCategory) => {
//   selectedCategory.value = selectedCategory.value !== id ? id : null;
// };
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

.productsList {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-bottom: 100px;
  @include breakpoint("sm") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint("md") {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
