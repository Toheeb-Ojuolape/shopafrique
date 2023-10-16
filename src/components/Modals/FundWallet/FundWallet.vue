<template>
  <v-card color="#F3F5F9">
    <div class="modal-logo">
      <div class="d-flex justify-end">
        <v-btn @click="handleClose" fab x-small outlined
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </div>
      <div>
        <v-img
          class="mx-auto"
          width="40px"
          src="./../../../assets/logo-2.svg"
        />
      </div>
    </div>
    <div>
      <div class="py-5 d-flex justify-center">
        <v-btn depressed class="fundwallet" color="white" large rounded>
          <Icon :name="'send'" class="mr-2" />FUND WALLET
        </v-btn>
      </div>
    </div>

    <v-window v-model="step">
      <v-window-item :value="1">
        <div class="fundingoptions">
          <HowMuch @setAmount="setAmount" />
          <FundingOptions @selectOption="selectOption" />
          <FundAlert
            :description="'Your transactions are safe and secure without any hidden costs and charges.'"
          />
          <PrimaryButton
            :disabled="disabled"
            :block="true"
            :large="true"
            @handleClick="handlePayment"
            :loading="loading"
          >
            Fund Wallet
          </PrimaryButton>

          <Flutterwave
            :name="'Tobi'"
            :email="`tobilobaojuolape@gmail.com`"
            :amount="amount"
            :currency="'NGN'"
            :country="'NG'"
            ref="flutterwave"
            @handleFlutterwavePayment="handleFlutterwavePayment"
          />
        </div>
      </v-window-item>
      <v-window-item :value="2">
        <InvoiceComponent :invoice="invoice" />
      </v-window-item>

      <v-window-item :value="3">
        <SuccessComponent
          :title="'Wallet Funded successfully'"
          :description="`You have successfully funded your Vyouz account with NGN ${amount}`"
          @handleClose="handleClose"
        />
      </v-window-item>
    </v-window>
  </v-card>
</template>


<script>
import Vue from "vue";
import Icon from "../../../assets/icons/Icon.vue";
import FundingOptions from "./FundingOptions.vue";
import HowMuch from "./HowMuch.vue";
import FundAlert from "./FundAlert.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import Flutterwave from "../../Services/Payments/Flutterwave.vue";
import { amountToNumber } from "../../../utils/amountFormatter.js";
import InvoiceComponent from "./InvoiceComponent.vue";
import SuccessComponent from "../../Misc/SuccessComponent.vue";
import { mapState } from "vuex";
Vue.filter("amountToNumber", amountToNumber);

export default {
  name: "FundWallet",
  components: {
    Icon,
    HowMuch,
    FundingOptions,
    FundAlert,
    PrimaryButton,
    Flutterwave,
    InvoiceComponent,
    SuccessComponent,
  },
  data() {
    return {
      amount: "",
      country: "",
      step: 1,
      alert: false,
      fundingoption: "",
      disabled: true,
    };
  },
  computed: {
    ...mapState("ln", {
      invoice: (state) => state.invoice,
      loading: (state) => state.loading,
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
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    setAmount(e) {
      this.amount = amountToNumber(e);
    },

    selectOption(e) {
      this.fundingoption = e;
    },

    async handlePayment() {
      if (this.fundingoption === "fund-card") {
        this.$refs.flutterwave.handleClick();
      } else {
        //generate Invoice
        try {
          const response = await this.$store.dispatch("ln/generateInvoice", {
            amount: this.amount,
            currency: "USD",
          });
          console.log(response)
          this.step++
        } catch (error) {
          this.step++;
        }
      }
    },

    handleFlutterwavePayment() {
      this.step = 3;
    },
  },
};
</script>