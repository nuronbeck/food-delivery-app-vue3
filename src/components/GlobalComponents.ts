import type { App } from "vue";

// UI components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";

// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";

export default {
  install(app: App) {
    // Register global components here
    app.component("BaseAlert", BaseAlert);
    app.component("AppHeader", AppHeader);
    app.component("AppFooter", AppFooter);
  },
};
