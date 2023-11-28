<template>
  <div>
    <div v-if="user.businessType === 'business'">
      <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
      <DashboardCards :user="user" :usdValue="usdValue" :isUsd="isUsd" />
      <LineChart :title="'Total Views'" :datacollection="CLICKSDATA" />
      <LineChart :title="'Total Clicks'" :datacollection="VIEWSDATA" />
    </div>
    <div v-if="user.businessType === 'creator' && completedSite">
      <SetupAccount
        :user="user"
        :loading="loading"
        :code="code"
        :sites="sites"
      />
    </div>
    <div v-else>
      <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
      <DashboardCards :user="user" :usdValue="usdValue" :isUsd="isUsd" />
      <LineChart :title="'Total Views'" :datacollection="CLICKSDATA" />
      <LineChart :title="'Total Clicks'" :datacollection="VIEWSDATA" />
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
    loading: {
      type: Boolean,
    },
    code: {
      type: String,
    },
    sites: {
      type: Array,
    },
  },
  data() {
    return {
      CLICKSDATA,
      VIEWSDATA,
    };
  },
  computed: {
    completedSite() {
      if (
        this.sites.filter((site) => site.Status === "completed").length >= 1
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>


<style>
@import "./Dashboard.css";
</style>