import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [],
    },
  ],
});

export default router;
