<script setup lang="ts">
import { ref } from "vue";
export interface IProfileSidemenu {}

interface IProfileSidemenuLink {
  title: string;
  description: string;
  url: string;
}

const links = ref<IProfileSidemenuLink[]>([
  {
    title: "Account",
    description: "Personal information",
    url: "/profile",
  },
  {
    title: "Address",
    description: "Shippings addresses",
    url: "/profile/address",
  },
  {
    title: "Payment method",
    description: "Connected credit cards",
    url: "/profile/payment-methods",
  },
  {
    title: "Security",
    description: "Password",
    url: "/profile/security",
  },
]);
</script>

<template>
  <aside :class="$style.aside">
    <h3>Aside</h3>

    <div>
      <RouterLink
        v-for="link in links"
        :key="link.url"
        :class="$style.tab"
        :to="link.url"
        exact-active-class="active"
      >
        <div class="profile__tab-img">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#83859C"
              d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
              stroke="#83859C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="profile__tab-content">
          <h2 class="profile__tab-title">{{ link.title }}</h2>
          <p class="profile__tab-text">{{ link.description }}</p>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>

<style module lang="scss">
.aside {
  width: 100%;
  background-color: red;
}

.tab {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px;
  box-sizing: border-box;
  background: $color-white;
  border: 2px solid $color-grey-lightest;
  border-radius: 16px;

  &.active {
    border: 2px solid $color-primary;

    .profile {
      &__tab-img {
        background: $color-primary;
      }
    }

    path {
      stroke: $color-white;
      transition: all 0.15s linear;
    }
  }

  &:hover {
    border: 2px solid $color-primary;

    path {
      stroke: $color-white;
      transition: all 0.15s linear;
    }

    .profile {
      &__tab-img {
        background: $color-primary;
      }
    }
  }
}
</style>
