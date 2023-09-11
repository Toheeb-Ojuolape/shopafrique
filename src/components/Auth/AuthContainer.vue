<template>
  <v-main class="auth-container">
    <slot></slot>
  </v-main>
</template>
  
  <script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthContainer",
});
</script>
  

 <style>
@import "../../../styles/auth.css";
</style>