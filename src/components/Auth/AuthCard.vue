<template>
  <div class="auth-card">
    <v-card elevation="2" width="100%" max-width="500px" class="rounded-xl form-card">
      <slot></slot>
    </v-card>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthCard",
});
</script>