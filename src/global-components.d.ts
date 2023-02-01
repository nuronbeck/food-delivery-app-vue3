// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import BaseInput from "@/components/Base/BaseInput.vue";

// Layout components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
import DealCard from "@/components/Cards/Deal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // Base components
    BaseAlert: typeof BaseAlert;
    BaseButton: typeof BaseButton;
    BaseSpinner: typeof BaseSpinner;
    BaseCheckbox: typeof BaseCheckbox;
    BaseInput: typeof BaseInput;

    // Layout components
    AppHeader: typeof AppHeader;
    AppFooter: typeof AppFooter;
    DealCard: typeof DealCard;
  }
}
