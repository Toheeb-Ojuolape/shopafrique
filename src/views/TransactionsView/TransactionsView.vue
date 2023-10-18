<template>
  <DashboardLayout>
    <TableComponent
      :title="'Transactions'"
      :data="transactions"
      :heading="heading"
      :buttonTitle="'See all transactions'"
      @handleClick="handleClick"
      :view="'page'"
      :loading="loading"
      :type="'transaction'"
    />
  </DashboardLayout>
</template>


<script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import TableComponent from "../../components/Table/Table.vue";
import { mapState } from "vuex";
import { WALLETHEADING } from "@/constants/constants";
export default {
  components: {
    TableComponent,
    DashboardLayout,
  },
  data() {
    return {
      heading: WALLETHEADING,
    };
  },
  computed: {
    ...mapState("wallet", {
      transactions: (state) => state.transactions,
      loading: (state) => state.loading,
    }),
  },

  created() {
    this.$store.dispatch("wallet/fetchTransactions");
  },

  methods: {
    handleClick() {
      this.$router.push("/transactions");
    },
  },
};
</script>