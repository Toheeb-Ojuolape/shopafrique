import Vue from "vue";
import VueRouter from "vue-router";
import SignupView from "../views/Auth/SignupView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView.vue";
import DashboardView from "../views/DashboardView/DashboardView.vue";
import CreateCampaign from "../views/CampaignView/CreateCampaign";
import CampaignView from "../views/CampaignView/CampaignView"
import AllCampaigns from "../views/CampaignView/AllCampaigns"
import Wallet from "../views/WalletView/WalletView.vue"
import Transactions from "../views/TransactionsView/TransactionsView.vue"
import Settings from "../views/SettingsView/SettingsView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPasswordView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/campaigns",
    name: "Campaign",
    component: CampaignView,
  },
  {
    path: "/create-campaign",
    name: "CreateCampaign",
    component: CreateCampaign,
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
  },

  {
    path: "/campaigns/all",
    name: "Campaigns",
    component: AllCampaigns,
  },

  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
