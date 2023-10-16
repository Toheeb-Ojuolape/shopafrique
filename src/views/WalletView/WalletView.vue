<template>
    <DashboardLayout>
      <WalletBody />
    </DashboardLayout>
  </template>
  
  
  
  <script>
  import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
  import WalletBody from "@/components/Wallet/WalletBody.vue";
  export default {
    name: "CreateCampaign",
    components: {
      DashboardLayout,
      WalletBody,
    },
  };
  </script>
  
  <style>
  @import "../../components/Campaigns/Campaigns.css";
  </style>