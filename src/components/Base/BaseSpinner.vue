<template>
  <div :class="classnames($style.spinner, $style[variant])"></div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { defineProps, withDefaults, onMounted } from "vue";

export interface IBaseSpinner {
  variant?: "primary" | "secondary";
}
withDefaults(defineProps<IBaseSpinner>(), {
  variant: "secondary",
});

onMounted(() => {
  console.log("onMounted");
});
</script>

<style module lang="scss">
.base {
  display: inline-block;
  width: 20px;
  height: 20px;

  .message {
    font-size: 14px;
    font-family: $base-font;
    font-weight: 400;
  }

  .white {
    &:after {
      border: 2px solid $color-white !important;
      border-color: $color-white transparent $color-white transparent !important;
    }
  }

  .primary {
    &:after {
      border: 2px solid $color-primary !important;
      border-color: $color-primary transparent $color-primary transparent !important;
    }
  }

  .secondary {
    &:after {
      border: 2px solid $color-secondary !important;
      border-color: $color-secondary transparent $color-secondary transparent !important;
    }
  }
}

.base-spinner:after {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  margin: 2px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
