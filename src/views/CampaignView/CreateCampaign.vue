<template>
  <DashboardLayout>
    <CreateCampaignBody />
  </DashboardLayout>
</template>



<script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import CreateCampaignBody from "@/components/Campaigns/CreateCampaignBody.vue";
export default {
  name: "CreateCampaign",
  components: {
    DashboardLayout,
    CreateCampaignBody,
  },
};
</script>

<style>
@import "../../components/Campaigns/Campaigns.css";
</style>