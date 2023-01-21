import BaseAlert from "@/components/Base/BaseAlert.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseAlert: typeof BaseAlert;
  }
}
