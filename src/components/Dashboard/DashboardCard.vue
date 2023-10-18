<template>
  <div>
    <div class="dashboard__card__top">
      <Icon :name="icon" />
    </div>
    <div class="dashboard__title">{{ title }}</div>
    <div>
      <h2>{{ formatAmount }}</h2>
    <span v-if="icon === 'wallet' && isUsd" class="usdvalue"
      ><v-progress-circular indeterminate
    /></span>
    <span v-if="icon === 'wallet' && !isUsd" class="usdvalue"
      >(≈ {{ usdValue | dollarFormat }})</span
    >
    </div>
    
  </div>
</template>



<script>
import { BRANDCOLOR } from "@/constants/constants";
import {
  amountFormatter,
  numberFormatter,
  dollarFormat,
} from "@/utils/amountFormatter";
import Icon from "@/assets/icons/Icon.vue";
import Vue from "vue";
Vue.filter("dollarFormat", dollarFormat);

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
    usdValue: {
      type: Number,
    },
    isUsd: {
      type: Boolean,
    },
  },
  components: {
    Icon,
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