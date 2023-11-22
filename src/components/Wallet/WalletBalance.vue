<template>
  <div class="hello__user">
    <div class="mt-3">
      <div>Vyouz Balance</div>
      <h1 v-if="!loading">
        {{ user.balance | amountFormatter }}
        <span class="usdvalue" v-if="!isUsd"
          >(≈{{ usdValue | dollarFormat }})</span
        >
      </h1>
      <h1 v-if="loading">
        <v-progress-circular :color="BRANDCOLOR" indeterminate />
      </h1>
    </div>
    <div class="mt-4">
      <PrimaryButton :large="true" @handleClick="handleFundWallet"
        ><v-icon>{{
          user && user.businessType === "business" ? "mdi-plus" : "mdi-minus"
        }}</v-icon
        >{{
          user && user.businessType === "business" ? "Add Money" : "Withdraw"
        }}</PrimaryButton
      >
    </div>
  </div>
</template>
    
    
<script>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import { BRANDCOLOR } from "@/constants/constants";
import { amountFormatter, dollarFormat } from "@/utils/amountFormatter";
import Vue from "vue";
Vue.filter("amountFormatter", amountFormatter);
Vue.filter("dollarFormat", dollarFormat);
export default {
  name: "FilterTab",
  components: {
    PrimaryButton,
  },
  props: {
    user: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
    usdValue: {
      type: [Number, String],
    },
    isUsd: {
      type: Boolean,
    },
  },
  data() {
    return {
      BRANDCOLOR,
    };
  },
  methods: {
    handleFundWallet() {
      this.$emit("handleFundWallet");
    },
  },
};
</script>