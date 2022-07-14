import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import DisconnectView from "../views/DisconnectView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/disconnect",
    name: "disconnect",
    component: DisconnectView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
