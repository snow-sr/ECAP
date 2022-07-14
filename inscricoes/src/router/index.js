import { createRouter, createWebHistory } from "vue-router";
import allCourses from "../views/client/allCourses.vue";
import dashboard from "../views/admin/dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: allCourses,
    },
    {
      path: "/admin",
      name: "Admin",
      component: dashboard,
    },
  ],
});

export default router;
