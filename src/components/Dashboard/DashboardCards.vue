<template>
  <div class="dashboard__cards">
    <DashboardCard
      :title="'Wallet Balance'"
      :icon="'mdi-wallet-outline'"
      :amount="500000"
      :buttonTitle="'View wallet'"
      :type="'amount'"
    />
    <DashboardCard
      :title="'Campaigns'"
      :icon="'mdi-bullseye'"
      :amount="500000"
      :buttonTitle="'View campaigns'"
      :type="'number'"
    />
    <DashboardCard
      :icon="'mdi-chart-arc'"
      :amount="500000"
      :title="'Spending'"
      :buttonTitle="'View spendings'"
      :type="'amount'"
    />
    <DashboardCard
      :icon="'mdi-chart-arc'"
      :amount="500000"
      :title="'Spending'"
      :buttonTitle="'View spendings'"
      :type="'amount'"
    />
  </div>
</template>


<script>
import DashboardCard from "./DashboardCard.vue";
export default {
  name: "DashboardCards",
  components: { DashboardCard },
};
</script>