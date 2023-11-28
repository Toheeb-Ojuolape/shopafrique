<template>
  <div>
    <div class="py-3 d-flex justify-space-between">
      <h2>{{ title }}</h2>
      <v-btn
        v-if="view !== 'page'"
        :color="BRANDCOLOR"
        text
        @click="handleClick"
        >{{ buttonTitle }}</v-btn
      >
    </div>
    <div class="tableWidth">
      <table class="table" cellspacing="0">
        <thead class="tableHeading">
          <tr>
            <th><v-checkbox v-model="checkbox" /></th>
            <th v-for="(_, i) in heading" :key="i" class="font-weight-medium">
              {{ heading[i] }}
            </th>
          </tr>
        </thead>

        <tbody v-if="!loading && data.length > 0" class="tableBody">
          <tr v-for="(row, i) in data" :key="i">
            <td>
              <v-checkbox v-model="checkbox" />
            </td>
            <td>{{ getTitle(row) }}</td>
            <td>
              <v-chip label :class="row.Status"
                ><li>{{ row.Status }}</li></v-chip
              >
            </td>
            <td>{{ row.CreatedAt | dateFormatter }}</td>
            <td>
              {{ getAmount(row) }}
            </td>
            <td>
              {{ getClick(row) }}
            </td>
            <td>
              {{ type === "campaign" ? row.Impressions : row.PaymentMethod }}
            </td>
            <td v-if="type === 'campaign'"><v-btn depressed>Details</v-btn></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="loading">
      <LoadingTable
        :title="title"
        :data="data"
        :buttonTitle="'See all ' + title"
        @handleClick="handleClick"
        :view="'page'"
        :loading="loading"
        :type="type"
      />
    </div>

    <div class="my-5" v-if="!loading && !data.length">
      <NothingToSee
        :title="emptytitle"
        :description="emptydescription"
        :buttonText="emptybutton"
        @emptyClick="emptyClick"
        :image="emptyimage"
      />
    </div>
  </div>
</template>
  
<script>
import { BRANDCOLOR } from "@/constants/constants";
import Vue from "vue";
import { dateFormatter } from "@/utils/dateFormatter";
import { shortenText } from "@/utils/stringFormatter";
import NothingToSee from "./NothingToSee";
import LoadingTable from "./LoadingTable.vue";
import { amountFormatter } from "@/utils/amountFormatter";

Vue.filter("dateFormatter", dateFormatter);
Vue.filter("shortenText", shortenText);
Vue.filter("amountFormatter", amountFormatter);

export default {
  name: "TableComponent",
  props: {
    title: {
      type: String,
    },
    data: {
      type: Array,
    },
    heading: {
      type: Array,
    },
    buttonTitle: {
      type: String,
    },
    type: {
      type: String,
    },
    view: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    emptytitle: {
      type: String,
    },
    emptydescription: {
      type: String,
    },
    emptybutton: {
      type: String,
    },
    emptyimage: {
      type: String,
    },
  },
  components: {
    NothingToSee,
    LoadingTable,
  },
  data() {
    return {
      checkbox: false,
      BRANDCOLOR: BRANDCOLOR,
    };
  },
  methods: {
    emptyClick() {
      this.$emit("emptyClick");
    },
    handleClick() {
      this.$emit("handleClick");
    },
    getTitle(row) {
      if (this.type === "campaign") {
        return row.Title;
      } else if (this.type === "sites") {
        return row.Website;
      }
    },
    getAmount(row) {
      if (this.type === "campaign") {
        return amountFormatter(row.Budget);
      } else if (this.type === "sites") {
        return row.Channel;
      } else {
        return amountFormatter(row.Amount);
      }
    },

    getClick(row){
      if(this.type==='campaign'){
        return row.Clicks
      } else if(this.type==='sites'){
        return row.Niche
      } else {
        return row.Type
      }
    }
  },
};
</script>