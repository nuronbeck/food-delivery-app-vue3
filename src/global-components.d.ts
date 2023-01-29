// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import BaseInput from "@/components/Base/BaseInput.vue";

// Skeletons
import CategoryCardSkeleton from "@/components/Skeletons/CategoryCardSkeleton.vue";
import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton.vue";

// Layout components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // Base components
    BaseAlert: typeof BaseAlert;
    BaseButton: typeof BaseButton;
    BaseSpinner: typeof BaseSpinner;
    BaseCheckbox: typeof BaseCheckbox;
    BaseInput: typeof BaseInput;
    CategoryCardSkeleton: typeof CategoryCardSkeleton;
    ProductCardSkeleton: typeof ProductCardSkeleton;

    // Layout components
    AppHeader: typeof AppHeader;
    AppFooter: typeof AppFooter;
  }
}
