import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
// import AppHeader from "@/components/Layout/AppHeader.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseAlert: typeof BaseAlert;
    BaseButton: typeof BaseButton;
    BaseSpinner: typeof BaseSpinner;
    // AppHeader: typeof AppHeader;
  }
}
