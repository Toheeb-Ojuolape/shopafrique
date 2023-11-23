<template>
  <div class="dashboard__cards">
    <DashboardCard
      :title="'Average Reach'"
      :icon="'reach'"
      :amount="0"
      :buttonTitle="'View wallet'"
      :type="'number'"
    />
    <DashboardCard
      :title="'Average Engagement'"
      :icon="'engagement'"
      :amount="0"
      :buttonTitle="'View campaigns'"
      :type="'number'"
    />
    <DashboardCard
      :icon="'clicks'"
      :amount="0"
      :title="'Average Clicks'"
      :buttonTitle="'View spendings'"
      :type="'number'"
    />
    <DashboardCard
      :icon="'global'"
      :amount="0"
      :title="'Total sites'"
      :buttonTitle="'View wallet'"
      :type="'number'"
    />
  </div>
</template>
  
  
  <script>
import DashboardCard from "../Dashboard/DashboardCard.vue";
export default {
  name: "DashboardCards",
  components: { DashboardCard },
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