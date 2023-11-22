<template>
  <div>
    <div class="py-5 text-center">
      <v-btn depressed class="fundwallet" color="white" large rounded>
        <Icon :name="'lightning'" class="mr-2" />WITHDRAW METHOD
      </v-btn>
    </div>
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
import FundingOptionForm from "@/components/Misc/Forms/FundingOptionForm.vue";
import Icon from "../../../assets/icons/Icon.vue";
export default {
  name: "FundingOptions",
  components: {
    Icon,
    FundingOptionForm,
  },
  data() {
    return {
      fundingOptions: [
        //   {
        //     title: "Bitcoin",
        //     description: "Arrives within minutes (Recommended)",
        //     value: "fund-bitcoin",
        //   },
        {
          title: "Lightning Address",
          description: "Processes in seconds",
          value: "lightning",
        },

        {
          title: "Lightning Invoice",
          description: "Processes in seconds",
          value: "invoice",
        },
      ],
      selected: "",
    };
  },
  methods: {
    selectOption(value) {
      this.selected = value;
      this.$emit("selectOption", value);
    },
  },
};
</script>