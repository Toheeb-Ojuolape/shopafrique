import Vue from "vue";
export default function handleSuccess(message) {
  Vue.prototype.$toast.clear();
  Vue.prototype.$toast.success(message, {
    icon: true,
  });
}
