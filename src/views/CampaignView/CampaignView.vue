<template>
  <DashboardLayout>
    <CampaignBody
      :campaigns="campaigns"
      :isCampaigns="isCampaigns"
      :user="user"
      :isUsd="isUsd"
      :usdValue="usdValue"
    />
  </DashboardLayout>
</template>
  
  
  
  <script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import CampaignBody from "@/components/Campaigns/CampaignBody.vue";
import { mapState } from "vuex";
export default {
  name: "CreateCampaign",
  components: {
    DashboardLayout,
    CampaignBody,
  },

  computed: {
    ...mapState({
      user: "user",
    }),
    ...mapState("ln", {
      usdValue: (state) => state.usdValue,
      isUsd: (state) => state.loading,
    }),
    ...mapState("campaigns", {
      campaigns: (state) => state.campaigns,
      isCampaigns: (state) => state.loading,
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
    this.$store.dispatch("campaign/fetchCampaigns");
  },

  methods: {
    handleClick() {
      this.$router.push("/transactions");
    },
  },
};
</script>
  
  <style>
@import "../../components/Campaigns/Campaigns.css";
</style>