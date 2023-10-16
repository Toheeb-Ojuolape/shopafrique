<template>
  <div>
    <div class="py-3 d-flex justify-space-between">
      <h2>{{ title }}</h2>
      <v-btn v-if="view !=='page'" :color="BRANDCOLOR" text @click="handleClick">{{
        buttonTitle
      }}</v-btn>
    </div>
    <div class="tableWidth">
    <table class="table" cellspacing="0">
      <thead class="tableHeading">
        <tr>
          <th><v-checkbox v-model="checkbox" /></th>
          <th v-for="(title, i) in heading" :key="i" class="font-weight-medium">
            {{ heading[i] }}
          </th>
        </tr>
      </thead>

      <tbody class="tableBody" v-for="(row, i) in data" :key="i">
        <tr>
          <td>
            <v-checkbox v-model="checkbox" />
          </td>
          <td>{{ row.title }}</td>
          <td>
            <v-chip label :class="row.status.toLowerCase()"
              ><li>{{ row.status }}</li></v-chip
            >
          </td>
          <td>{{ row.date }}</td>
          <td>{{ row.budget }}</td>
          <td>{{ row.clicks }}</td>
          <td>{{ row.impressions }}</td>
          <td v-if="type === 'campaign'"><v-btn depressed>Details</v-btn></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
  
<script>
import { BRANDCOLOR } from "@/constants/constants";
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