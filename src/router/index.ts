import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "../views/PortfolioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: Portfolio,
    },
    
  ],
});

export default router;
