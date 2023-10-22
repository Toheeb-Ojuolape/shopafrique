<template>
  <div>
    <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
    <DashboardCards :user="user" :usdValue="usdValue" :isUsd="isUsd" />
    <LineChart :title="'Total Views'" :datacollection="CLICKSDATA" />
    <LineChart :title="'Total Clicks'" :datacollection="VIEWSDATA" />
  </div>
</template>



<script>
import DashboardCards from "./DashboardCards.vue";
import PageTitle from "../Misc/PageTitle.vue";
import LineChart from "../Charts/LineChart.vue";
import { CLICKSDATA, VIEWSDATA } from "../../constants/chart/chartdata";
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
  data() {
    return {
      CLICKSDATA,
      VIEWSDATA,
    };
  },
};
</script>


<style>
@import "./Dashboard.css";
</style>