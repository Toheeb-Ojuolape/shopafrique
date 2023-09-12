<template>
  <div>
    <v-card>
      <h1>Welcome</h1>
    </v-card>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "DashboardView",
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
});
</script>