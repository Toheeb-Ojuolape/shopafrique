<template>
<div class="container-fluid">
  <div class="row">
    <!-- Form Half -->
    <div class="col-md-6">
      <div class="auth-card">
        <v-card
          flat
          class="rounded-xl form-card"
        >
          <slot></slot>
        </v-card>
      </div>
    </div>
    <!-- Image Half -->
    <div style="background:#f4f7fa" class="col-md-6">
      <div class="d-flex justify-start">
        <v-img src="../../assets/authimage.jpg" />
      </div>
    </div>
  </div>
</div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthCard",
});
</script>