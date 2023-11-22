<template>
  <div>
    <WalletBalance
      :user="user"
      :loading="loading"
      @handleFundWallet="handleFundWallet"
      :usdValue="usdValue"
      :isUsd="isUsd"
    />
    <line-chart :title="'Ad Spend'" :datacollection="ADSPENDDATA" />
    <TableComponent
      :title="'Recent Transactions'"
      :data="transactions.slice(0, 5)"
      :heading="WALLETHEADING"
      :buttonTitle="'See all transactions'"
      @handleClick="handleClick"
      :loading="isTransactions"
    />

    <v-dialog persistent v-model="fundwallet" max-width="500px">
      <FundWallet
        :user="user"
        @handleClose="handleClose"
        :label="'How much do you wish to add?'"
      />
    </v-dialog>

    <v-dialog persistent v-model="withdraw" max-width="500px">
      <WithdrawFunds
        :user="user"
        @handleClose="handleClose"
        :label="'How much do you wish to withdraw (in sats)?'"
      />
    </v-dialog>
  </div>
</template>
  
  
<script>
import WalletBalance from "./WalletBalance.vue";
import LineChart from "../Charts/LineChart.vue";
import TableComponent from "../Table/Table.vue";
import FundWallet from "../Modals/FundWallet/FundWallet.vue";
import WithdrawFunds from "../Modals/Withdrawal/WithdrawFunds.vue";
import { mapState } from "vuex";
import { WALLETHEADING } from "@/constants/constants";
import { ADSPENDDATA } from "@/constants/chart/chartdata";
export default {
  name: "CampaignBody",
  components: {
    WalletBalance,
    LineChart,
    TableComponent,
    FundWallet,
    WithdrawFunds,
  },
  props: {
    user: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
    transactions: {
      type: Array,
    },
    isTransactions: {
      type: Boolean,
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
      WALLETHEADING: WALLETHEADING,
      fundwallet: false,
      withdraw: false,
      ADSPENDDATA,
    };
  },
  computed: {
    ...mapState({
      campaigns: "campaigns",
    }),
  },
  methods: {
    handleClick() {
      this.$router.push("/transactions");
    },
    handleFundWallet() {
      if (this.user.businessType === "business") {
        this.fundwallet = !this.fundwallet;
      } else {
        this.withdraw = !this.withdraw;
      }
    },
    handleClose() {
      if (this.user.businessType === "business") {
        this.fundwallet = !this.fundwallet;
      } else {
        this.withdraw = !this.withdraw;
      }
    },
  },
};
</script>