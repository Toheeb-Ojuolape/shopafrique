import Vue from "vue"
export default function handleSuccess(message) {
  Vue.prototype.$toast.success(message,{
    icon:true
  });
}
