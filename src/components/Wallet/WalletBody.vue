<template>
  <div>
    <WalletBalance @handleFundWallet="handleFundWallet"/>
    <line-chart :title="'Ad Spend'" />
    <TableComponent
      :title="'Recent Transactions'"
      :data="transactions"
      :heading="heading"
      :buttonTitle="'See all transactions'"
      @handleClick="handleClick"
    />

    <v-dialog persistent v-model="fundwallet" max-width="500px">
      <FundWallet @handleClose="handleClose"/>
    </v-dialog>
  </div>
</template>
  
  
<script>
import WalletBalance from "./WalletBalance.vue";
import LineChart from "../Charts/LineChart.vue";
import TableComponent from "../Table/Table.vue";
import FundWallet from "../Modals/FundWallet/FundWallet.vue";
import { mapState } from "vuex";
export default {
  name: "CampaignBody",
  components: {
    WalletBalance,
    LineChart,
    TableComponent,
    FundWallet
  },
  data() {
    return {
      heading: [
        "Date",
        "Transactions ID",
        "Type",
        "Amount (SATs)",
        "Payment Method",
        "Status",
      ],
      fundwallet:false
    };
  },
  computed: {
    ...mapState({
      campaigns: "campaigns",
      transactions:"transactions"
    }),
  },
  methods:{
    handleClick(){
      this.$router.push('/transactions')
    },
    handleFundWallet(){
      this.fundwallet = !this.fundwallet
    },
    handleClose(){
      this.fundwallet = !this.fundwallet
    }
  }
};
</script>