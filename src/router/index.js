import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "../views/Auth/SignupView.vue"
import LoginView from "../views/Auth/LoginView.vue"
import ForgotPasswordView from "../views/Auth/ForgotPasswordView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/signup",
    name:'signup',
    component:SignupView
  },
  {
    path:"/login",
    name:"login",
    component:LoginView
  },
  {
    path:"/forgot-password",
    name:"ForgotPassword",
    component:ForgotPasswordView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
