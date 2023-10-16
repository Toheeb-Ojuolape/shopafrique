<template>
  <DashboardLayout>
    <TableComponent
      :title="'Transactions'"
      :data="transactions"
      :heading="heading"
      :buttonTitle="'See all transactions'"
      @handleClick="handleClick"
      :view="'page'"
    />
  </DashboardLayout>
</template>


<script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import TableComponent from "../../components/Table/Table.vue";
import { mapState } from "vuex";
export default {
  components: {
    TableComponent,
    DashboardLayout,
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
    };
  },
  computed: {
    ...mapState({
      transactions: "transactions",
    }),
  },
};
</script>