<template>
  <DashboardLayout>
    <HelloUser :user="user" />
    <DashboardBody
      :user="user"
      :usdValue="usdValue"
      :isUsd="isUsd"
      :loading="loading"
      :code="code"
      :sites="sites"
    />
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
  components: { DashboardLayout, DashboardBody, HelloUser },
  computed: {
    ...mapState({
      user: "user",
    }),
    ...mapState("ln", {
      usdValue: (state) => state.usdValue,
      isUsd: (state) => state.loading,
    }),
    ...mapState("creator", {
      loading: (state) => state.loading,
      code: (state) => state.code,
      sites: (state) => state.sites,
    }),
  },
  watch: {
    user() {
      if (this.user != null) {
        this.$store.dispatch("ln/getUsdValue", this.user.balance);
      }
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("creator/fetchSites");
  },
});
</script>