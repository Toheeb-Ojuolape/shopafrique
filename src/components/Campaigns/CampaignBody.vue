<template>
  <div>
    <FilterTab />
    <dashboard-cards />
    <line-chart :title="'Ad Spend'" :datacollection="ADSPENDDATA"/>
    <TableComponent
      :title="'Recent Campaigns'"
      :data="campaigns"
      :heading="heading"
      :buttonTitle="'See all campaigns'"
      @handleClick="handleClick"
      :type="'campaign'"
      :loading="isCampaigns"
    />
  </div>
</template>


<script>
import FilterTab from "./FilterTab.vue";
import DashboardCards from "../Dashboard/DashboardCards.vue";
import LineChart from "../Charts/LineChart.vue";
import TableComponent from "../Table/Table.vue";
import { ADSPENDDATA } from "@/constants/chart/chartdata";
export default {
  name: "CampaignBody",
  components: {
    FilterTab,
    DashboardCards,
    LineChart,
    TableComponent,
  },
  data() {
    return {
      heading: [
        "Title",
        "Status",
        "Date created",
        "Budget",
        "Clicks",
        "Impressions",
        "",
      ],
      ADSPENDDATA
    };
  },
  props: {
    isCampaigns: {
      type: Boolean,
    },
    campaigns: {
      type: Array,
    },
  },
  methods: {
    handleClick() {
      this.$router.push("/campaigns/all");
    },
  },
};
</script>