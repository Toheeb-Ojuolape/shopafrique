<template>
  <DashboardLayout>
    <WalletBody
      :user="user"
      :loading="loading"
      :isTransactions="isTransactions"
      :transactions="transactions"
      :usdValue="usdValue"
      :isUsd="isUsd"
    />
  </DashboardLayout>
</template>
  
  
  
  <script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import WalletBody from "@/components/Wallet/WalletBody.vue";
import { mapState } from "vuex";
export default {
  name: "CreateCampaign",
  components: {
    DashboardLayout,
    WalletBody,
  },

  watch: {
    user() {
      if (this.user != null) {
        this.$store.dispatch("ln/getUsdValue", this.user.balance);
      }
    },
  },

  computed: {
    ...mapState({
      user: "user",
      loading: "loading",
    }),
    ...mapState("wallet", {
      transactions: (state) => state.transactions,
      isTransactions: (state) => state.loading,
    }),

    ...mapState("ln", {
      usdValue: (state) => state.usdValue,
      isUsd: (state) => state.loading,
    }),
  },

  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("wallet/fetchTransactions");
  },

  methods: {
    handleClick() {
      this.$router.push("/transactions");
    },
  },
};
</script>
  
  <style>
@import "../../components/Campaigns/Campaigns.css";
</style>