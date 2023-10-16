import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export const API_URL = process.env.VUE_APP_API_URL;
export const SERVICE_URL = process.env.VUE_APP_SERVICE_URL
export const HEADERS = {
  Authorization: `Bearer ${VueCookies.get("token")}`,
  "Content-Type": "application/json",
  Accept: "*/*",
};
export const USERDATA = JSON.parse(sessionStorage.getItem("userData"));
export const BRANDCOLOR = "#2D55FB"; 
export const SECONDARYBLUE = "#f0f5fd";
export const BRANDNAME = "Vyouz";
export const EMAILREGEX = /.+@.+\..+/;
export const FORMRULES = {
  required: (value) => !!value || "This field is required",
  email: (v) => EMAILREGEX.test(v) || "Email should be valid",
  password: (v) => v.length >= 8 || "Password should be more than 8 characters",
};
