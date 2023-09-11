import Vue from "vue"
export default function handleError(message) {
  Vue.prototype.$toast.clear()
  Vue.prototype.$toast.error(message,{
    icon:true
  });
}
