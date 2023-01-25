import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OfferView from "../views/OfferView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import PricingView from "../views/PricingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/oferta",
      name: "offer",
      component: OfferView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/cennik",
      name: "price",
      component: PricingView,
    },
  ],
});

export default router;
