import type { App } from "vue";

// UI components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";

// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";


export default {
  install(app: App): void {
    // Register global components here
    app.component("BaseAlert", BaseAlert);
    app.component("BaseButton", BaseButton);
    
    app.component("AppHeader", AppHeader);
    app.component("AppFooter", AppFooter);
  },
};
