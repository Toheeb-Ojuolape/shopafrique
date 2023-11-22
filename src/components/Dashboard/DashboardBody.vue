<template>
  <div>
    <div v-if="user.businessType === 'business'">
      <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
      <DashboardCards :user="user" :usdValue="usdValue" :isUsd="isUsd" />
      <LineChart :title="'Total Views'" :datacollection="CLICKSDATA" />
      <LineChart :title="'Total Clicks'" :datacollection="VIEWSDATA" />
    </div>
    <div>
      <SetupAccount />
    </div>
  </div>
</template>



<script>
import DashboardCards from "./DashboardCards.vue";
import PageTitle from "../Misc/PageTitle.vue";
import LineChart from "../Charts/LineChart.vue";
import SetupAccount from "../SetupAccount/SetupAccount.vue";
import { CLICKSDATA, VIEWSDATA } from "../../constants/chart/chartdata";
export default {
  name: "DashboardBody",
  components: { DashboardCards, PageTitle, LineChart, SetupAccount },
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