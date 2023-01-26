import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseAlert: typeof BaseAlert;
    BaseSpinner: typeof BaseSpinner;
  }
}
