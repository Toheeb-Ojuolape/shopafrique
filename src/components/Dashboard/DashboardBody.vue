<template>
  <div>
    <PageTitle :icon="'mdi-view-grid-outline'" :title="'Business Insights'" />
    <DashboardCards />
    <LineChart :title="'Total Views'"/>
    <LineChart :title="'Total Clicks'"/>
  </div>
</template>



<script>
import DashboardCards from "./DashboardCards.vue";
import PageTitle from "../Misc/PageTitle.vue";
import { mapState } from "vuex";
import LineChart from '../Charts/LineChart.vue';
export default {
  name: "DashboardBody",
  components: { DashboardCards, PageTitle,LineChart },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
};
</script>


<style>
@import "./Dashboard.css";
</style>