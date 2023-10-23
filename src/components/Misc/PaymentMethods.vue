<template>
  <div class="my-3">
    <h3>Payment Methods</h3>

    <div v-for="(option, i) in fundingOptions" :key="i">
      <FundingOptionForm
        @selectOption="selectOption"
        :title="option.title"
        :selected="selected"
        :value="option.value"
        :description="option.description"
        :name="'funding-method'"
      />
    </div>
  </div>
</template>


<script>
import FundingOptionForm from "./Forms/FundingOptionForm.vue";
export default {
  components: {
    FundingOptionForm,
  },
  data() {
    return {
      fundingOptions: [
        {
          title: "Fund with Bitcoin",
          description: "Arrives within minutes (Recommended)",
          value: "fund-bitcoin",
        },
        {
          title: "Fund with Card",
          description: "Instant (Fiat converted to BTC)",
          value: "fund-card",
        },
      ],
      selected: "fund-bitcoin"
    };
  },
};
</script>