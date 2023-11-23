<template>
  <v-card color="#F3F5F9">
    <div class="modal-logo">
      <div class="d-flex justify-end">
        <v-btn @click="handleClose" fab x-small outlined
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </div>

      <div>
        <div>
          <h2>Add New Site</h2>
        </div>
      </div>
    </div>

    <v-window v-model="step">
      <v-window-item :value="1">
        <div class="pa-3">
          <SiteDetails :isAddSite="true" />

          <FundAlert
            :description="'You can add as many sites you wish, but can be added just one at a time.'"
          />

          <PrimaryButton :block="true" :large="true" @handleClick="handleClick"
            >Next</PrimaryButton
          >
        </div>
      </v-window-item>
      <v-window-item :value="2">
        <CodeSnippet :code="'<div>Hello</div>'"/>
        <!-- <TelegramInstructions /> -->

        <PrimaryButton :block="true" :large="true" @handleClick="handleClick"
            >Verify</PrimaryButton
          >
      </v-window-item>

      <v-window-item :value="3">
        <SuccessComponent
          :title="'Integration Verified Successfully'"
          :description="`You have successfully funded your Vyouz account with NGN ${amount} (${satsValue} sats)`"
          @handleClose="handleClose"
        />
      </v-window-item>
    </v-window>
  </v-card>
</template>
  
  
<script>
import Vue from "vue";
import { amountToNumber } from "../../../utils/amountFormatter.js";
import SuccessComponent from "../../Misc/SuccessComponent.vue";
import { mapState } from "vuex";
import AFRICANCOUNTRIES from "../../../data/africancountries.json";
Vue.filter("amountToNumber", amountToNumber);
import SiteDetails from "@/components/SetupAccount/Forms/SiteDetails.vue";
import FundAlert from "../FundWallet/FundAlert.vue";
import PrimaryButton from "../../Buttons/PrimaryButton.vue";
// import TelegramInstructions from '@/components/Misc/Creator/TelegramInstruction.vue';
import CodeSnippet from '@/components/Misc/Creator/CodeSnippet.vue';

export default {
  name: "FundWallet",
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    PrimaryButton,
    FundAlert,
    SuccessComponent,
    SiteDetails,
    CodeSnippet,
    // TelegramInstructions
  },
  data() {
    return {
      amount: "",
      country: "",
      step: 1,
      alert: false,
      fundingoption: "",
      disabled: true,
      socketClient: "",
      AFRICANCOUNTRIES,
    };
  },
  computed: {
    ...mapState("ln", {
      invoice: (state) => state.invoice,
      loading: (state) => state.loading,
      satsValue: (state) => state.satsValue,
    }),
  },

  watch: {
    amount() {
      if (this.amount && this.fundingoption) {
        this.disabled = false;
      }
    },
    fundingoption() {
      if (this.amount && this.fundingoption) {
        this.disabled = false;
      }
    },
  },

  created() {},

  methods: {
    handleClose(){
        this.step = 1
        this.$emit("handleClose")
    },
    handleClick() {
      this.step++;
    }
  },
};
</script>