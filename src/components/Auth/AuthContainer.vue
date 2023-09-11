<template>
  <v-main :class="className">
    <slot></slot>
  </v-main>
</template>
  
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthContainer",
  props: {
    className: {
      type: String,
    },
  },
});
</script>
  

 <style>
@import "../../../styles/auth.css";
</style>