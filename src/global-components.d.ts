import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";


declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseAlert: typeof BaseAlert;
    BaseButton: typeof BaseButton;
  }
}
