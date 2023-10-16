<template>
  <div>
    <div class="dashboard__card__top">
      <v-icon>{{ icon }}</v-icon>
    </div>
    <div class="dashboard__title">{{ title }}</div>
    <h2>
      {{ formatAmount }}
    </h2>
  </div>
</template>



<script>
import { BRANDCOLOR } from "@/constants/constants";
import { amountFormatter, numberFormatter } from "@/utils/amountFormatter";

export default {
  props: {
    amount: {
      type: Number,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    buttonTitle: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      BRANDCOLOR,
    };
  },
  computed: {
    formatAmount() {
      if (this.type === "amount") {
        return amountFormatter(this.amount);
      } else {
        return numberFormatter(this.amount);
      }
    },
  },
};
</script>