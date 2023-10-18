<template>
  <div>
    <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
    <DashboardCards :user="user" :usdValue="usdValue" :isUsd="isUsd" />
    <LineChart :title="'Total Views'" />
    <LineChart :title="'Total Clicks'" />
  </div>
</template>



<script>
import DashboardCards from "./DashboardCards.vue";
import PageTitle from "../Misc/PageTitle.vue";
import LineChart from "../Charts/LineChart.vue";
export default {
  name: "DashboardBody",
  components: { DashboardCards, PageTitle, LineChart },
  props: {
    user: {
      type: Object,
    },
    usdValue: {
      type: [Number, String],
    },
    isUsd: {
      type: Boolean,
    },
  },
};
</script>


<style>
@import "./Dashboard.css";
</style>