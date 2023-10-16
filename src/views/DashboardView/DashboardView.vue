<template>
  <DashboardLayout>
    <HelloUser :user="user"/>
    <DashboardBody />
  </DashboardLayout>
</template>


<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import DashboardBody from "@/components/Dashboard/DashboardBody.vue";
import HelloUser from "@/components/Dashboard/HelloUser.vue";
export default Vue.extend({
  name: "DashboardView",
  components: { DashboardLayout, DashboardBody,HelloUser },
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