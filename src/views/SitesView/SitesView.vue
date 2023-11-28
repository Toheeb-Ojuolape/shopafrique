<template>
  <DashboardLayout>
    <SitesBody
      :sites="sites"
      :isSites="loading"
      :user="user"
      :isUsd="isUsd"
      :usdValue="usdValue"
    />
  </DashboardLayout>
</template>
    
    
    
<script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import SitesBody from "@/components/Sites/SitesBody.vue";
import { mapState } from "vuex";
export default {
  name: "CreateCampaign",
  components: {
    DashboardLayout,
    SitesBody,
  },

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
};
</script>
    
    <style>
@import "../../components/Campaigns/Campaigns.css";
</style>