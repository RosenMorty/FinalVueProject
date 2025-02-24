import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    // {
    //   name: "app",
    //   path: "/app",
    //   component: () => import("@/components/TheBar.vue"),
    // },
    {
      name: "auth",
      path: "/auth",
      component: () => import("@/components/TheModal.vue"),
    },
  ],
});

export default router;
