<template>
  <div class="dashboard__cards">
    <DashboardCard
      :title="'Total Clicks'"
      :icon="'views'"
      :amount="0"
      :buttonTitle="'View wallet'"
      :type="'number'"
    />
    <DashboardCard
      :title="'Total Clicks'"
      :icon="'clicks'"
      :amount="0"
      :buttonTitle="'View campaigns'"
      :type="'number'"
    />
    <DashboardCard
      :icon="'ad-spend'"
      :amount="0"
      :title="'Spending'"
      :buttonTitle="'View spendings'"
      :type="'amount'"
    />
    <DashboardCard
      :icon="'wallet'"
      :amount="user?user.balance:0"
      :title="'Wallet Balance'"
      :buttonTitle="'View wallet'"
      :type="'amount'"
      :usdValue="usdValue"
      :isUsd="isUsd"
    />
  </div>
</template>


<script>
import DashboardCard from "./DashboardCard.vue";
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