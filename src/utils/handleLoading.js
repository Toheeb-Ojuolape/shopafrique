import Vue from "vue";
import LoadingSpinner from "../components/Loader/LoadingSpinner.vue";
export default function handleError() {
  Vue.prototype.$toast.info(LoadingSpinner, {
    icon: false,
    timeout: 5000,
  });
}
