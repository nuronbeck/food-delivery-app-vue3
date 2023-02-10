// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
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
          component: () => import("@/pages/HomePage.vue"),
        },
        {
          path: "profile",
          component: () => import("../pages/ProfilePage.vue"),
          children: [
            {
              path: "",
              component: () => import("../pages/Profile/AccountPage.vue"),
            },
            {
              path: "address",
              component: () => import("../pages/Profile/AccountPage.vue"),
            },
            {
              path: "payment-methods",
              component: () => import("../pages/Profile/AccountPage.vue"),
            },
            {
              path: "security",
              component: () => import("../pages/Profile/AccountPage.vue"),
            },
          ]
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "",
          component: () => import("@/pages/Auth/LoginPage.vue"),
        },
        {
          path: "sign-up",
          component: () => import("@/pages/Auth/SignUpPage.vue"),
        },
      ],
    },
  ],
});

export default router;
