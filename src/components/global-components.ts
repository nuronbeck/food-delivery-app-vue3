import type { App } from "vue";

// UI components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
import DealCard from "@/components/Cards/DealCard.vue";
import CategoryCard from "@/components/Cards/CategoryCard.vue";

// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import BaseInput from "@/components/Base/BaseInput.vue";

// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCheck,
  faExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEye);
library.add(faEyeSlash);
library.add(faCheck);
library.add(faExclamation);
library.add(faXmark);

export default {
  install(app: App): void {
    // Register global components here
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.component("BaseAlert", BaseAlert);
    app.component("BaseButton", BaseButton);
    app.component("BaseSpinner", BaseSpinner);
    app.component("BaseCheckbox", BaseCheckbox);
    app.component("BaseInput", BaseInput);

    app.component("AppHeader", AppHeader);
    app.component("AppFooter", AppFooter);
    app.component("DealCard", DealCard);
    app.component("CategoryCard", CategoryCard);
  },
};
