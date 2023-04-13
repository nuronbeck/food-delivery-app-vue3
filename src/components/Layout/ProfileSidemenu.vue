<script setup lang="ts">
import { ref } from "vue";

interface IProfileSidemenuLink {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const links = ref<IProfileSidemenuLink[]>([
  {
    title: "Account",
    description: "Personal information",
    url: "/profile",
    image:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#83859C" d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    title: "Address",
    description: "Shippings addresses",
    url: "/profile/address",
    image:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.3442 3.29018 4.43655 4.6967 3.03003C6.10322 1.6235 8.01088 0.833328 10 0.833328C11.9891 0.833328 13.8968 1.6235 15.3033 3.03003C16.7098 4.43655 17.5 6.3442 17.5 8.33333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    description: "Connected credit cards",
    title: "Payment method",
    url: "/profile/payment-methods",
    image:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 3.33334H2.49998C1.5795 3.33334 0.833313 4.07953 0.833313 5V15C0.833313 15.9205 1.5795 16.6667 2.49998 16.6667H17.5C18.4205 16.6667 19.1666 15.9205 19.1666 15V5C19.1666 4.07953 18.4205 3.33334 17.5 3.33334Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0.833313 8.33334H19.1666" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    title: "Security",
    description: "Password",
    url: "/profile/security",
    image:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99998 18.3333C9.99998 18.3333 16.6666 15 16.6666 10V4.16667L9.99998 1.66667L3.33331 4.16667V10C3.33331 15 9.99998 18.3333 9.99998 18.3333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
]);
</script>

<template>
  <aside :class="$style.aside">
    <h5>Setting</h5>
    <div>
      <RouterLink
        v-for="link in links"
        :key="link.url"
        :class="$style.tab"
        :to="link.url"
        exact-active-class="active"
      >
        <div v-html="link.image" :class="$style.image"></div>

        <div :class="$style.wrapper">
          <div :class="$style.title">{{ link.title }}</div>
          <div :class="$style.text">{{ link.description }}</div>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>

<style module lang="scss">
.tab {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px;
  box-sizing: border-box;
  border: 2px solid $color-grey-lightest;
  border-radius: 16px;
  text-decoration: none;

  &:hover {
    border: 2px solid $color-primary;

    path {
      stroke: $color-white;
      transition: all 0.15s linear;
    }

.image {
      background: $color-primary;
    }
  }
}
.image {
  background: $color-grey-lightest;
  border-radius: 12px;
  padding: 10px;
  margin-right: 12px;
  transition: all 0.15s linear;
}

.title {
  color: $color-dark;
  font-family: $base-font;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1px;
  text-decoration: none;
}
.text {
  color: $color-grey-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
}
</style>