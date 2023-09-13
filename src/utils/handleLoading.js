import Vue from "vue";
import LoadingSpinner from "../components/Loader/LoadingSpinner.vue";
export default function handleLoading() {
  Vue.prototype.$toast.info(LoadingSpinner, {
    icon: false,
    timeout: 10000,
  });
}
