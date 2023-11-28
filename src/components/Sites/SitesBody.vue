<template>
  <div>
    <FilterTab @addSite="addSite" />
    <SitesCards :user="user" :isUsd="isUsd" :usdValue="usdValue" />
    <TableComponent
      :title="'All Sites'"
      :data="sites"
      :heading="heading"
      :buttonTitle="'See all sites'"
      @handleClick="handleClick"
      :type="'sites'"
      :loading="isSites"
      :emptytitle="'No site to show'"
      :emptybutton="'Add site'"
      :emptydescription="'Add a new site to start earning'"
      @emptyClick="addSite"
      :emptyimage="'empty-sites'"
    />

    <v-dialog persistent max-width="500px" v-model="addsite">
      <AddSite :user="user" @handleClose="handleClose" />
    </v-dialog>
  </div>
</template>
  
  
  <script>
import FilterTab from "./FilterTab.vue";
import SitesCards from "./SitesCards.vue";
import TableComponent from "../Table/Table.vue";
import { ADSPENDDATA } from "@/constants/chart/chartdata";
import AddSite from "../Modals/AddSite/AddSite.vue";
export default {
  name: "CampaignBody",
  props: {
    sites: {
      type: Array,
    },
    user: {
      type: Object,
    },
    usdValue: {
      type: [Number, String],
    },
    isUsd: {
      type: Boolean,
    },
    isSites: {
      type: Boolean,
    },
  },
  components: {
    FilterTab,
    SitesCards,
    TableComponent,
    AddSite,
  },
  data() {
    return {
      heading: [
        "Site Url",
        "Status",
        "Date created",
        "Channel",
        "Niche",
        "",
        "",
      ],
      ADSPENDDATA,
      addsite: false,
    };
  },
  methods: {
    addSite() {
      this.addsite = !this.addsite;
    },

    handleClick() {
      alert("ak");
    },
    handleClose() {
      this.addsite = !this.addsite;
    },
  },
};
</script>