import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayout from "@/layouts/MainLayout.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "login",
          component: () => import("../views/Auth/LoginPage.vue"),
        },
          {
          path: "forgot-password",
          component: () => import("../views/Auth/ForgotPasswordPage.vue"),
        },
        {
          path: "sign",
          component: () => import("../views/Auth/SignPage.vue"),
        },
      ]
    },
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
  ],
});

export default router;
