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
            <td>{{ type === "campaign" ? row.Title : row.ID }}</td>
            <td>
              <v-chip label :class="row.Status"
                ><li>{{ row.Status }}</li></v-chip
              >
            </td>
            <td>{{ row.CreatedAt | dateFormatter }}</td>
            <td>
              {{
                type === "campaign" ? row.Budget : row.Amount | amountFormatter
              }}
            </td>
            <td>
              {{ type === "campaign" ? row.Clicks : row.Type }}
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
        :title="'Transactions'"
        :data="data"
        :buttonTitle="'See all transactions'"
        @handleClick="handleClick"
        :view="'page'"
        :loading="loading"
        :type="type"
      />
    </div>

    <div class="my-5" v-if="!loading && !data.length">
      <NothingToSee />
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
    handleClick() {
      this.$emit("handleClick");
    },
  },
};
</script>