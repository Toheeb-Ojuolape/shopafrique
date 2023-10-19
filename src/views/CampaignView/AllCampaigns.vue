<template>
  <DashboardLayout>
    <TableComponent
      :title="'Campaigns'"
      :data="campaigns"
      :heading="heading"
      :buttonTitle="'See all campaigns'"
      @handleClick="handleClick"
      :view="'page'"
      :loading="loading"
      :type="'campaign'"
    />
  </DashboardLayout>
</template>
  
  
  <script>
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import TableComponent from "../../components/Table/Table.vue";
import { mapState } from "vuex";
import { CAMPAIGNHEADING } from '@/constants/constants';
export default {
  components: {
    TableComponent,
    DashboardLayout,
  },
  data() {
    return {
      heading: CAMPAIGNHEADING
    };
  },
  computed: {
    ...mapState("campaigns", {
      campaigns: (state) => state.campaigns,
      loading: (state) => state.loading,
    }),
  },

  created() {
    this.$store.dispatch("campaigns/fetchCampaigns");
  },

  methods: {
    handleClick() {
      this.$router.push("/transactions");
    },
  },
};
</script>