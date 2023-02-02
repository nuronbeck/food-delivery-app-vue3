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
    </div>
  </main>
</template>

<script setup lang="ts">
import dealsList from "@/data/dealList";
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
</style>
