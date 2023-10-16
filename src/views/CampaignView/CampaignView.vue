<template>
    <DashboardLayout>
      <CampaignBody />
    </DashboardLayout>
  </template>
  
  
  
  <script>
  import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
  import CampaignBody from "@/components/Campaigns/CampaignBody.vue";
  export default {
    name: "CreateCampaign",
    components: {
      DashboardLayout,
      CampaignBody,
    },
  };
  </script>
  
  <style>
  @import "../../components/Campaigns/Campaigns.css";
  </style>