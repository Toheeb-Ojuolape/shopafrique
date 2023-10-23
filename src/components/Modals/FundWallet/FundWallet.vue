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
          <HowMuch @setAmount="setAmount" :user="user && user" />
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
            :name="user && user.firstName"
            :email="user && user.email"
            :amount="amount"
            :currency="AFRICANCOUNTRIES[user.country].currency"
            :country="AFRICANCOUNTRIES[user.country].code"
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
          :description="`You have successfully funded your Vyouz account with NGN ${amount} (${satsValue} sats)`"
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
import handleError from "@/utils/handleErrors";
import AFRICANCOUNTRIES from "../../../data/africancountries.json";
Vue.filter("amountToNumber", amountToNumber);
import { io } from "socket.io-client";

export default {
  name: "FundWallet",
  props: {
    user: {
      type: Object,
    },
  },
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

  created() {
    const socket = io(process.env.VUE_APP_SERVICE_URL);
    socket.on("message", (data) => {
      console.log("Received message:", data);
      this.socketClient = data;
    });

    socket.on("payment-verified", async () => {
      await this.$store.dispatch("wallet/fundWallet", {
        type: "wallet-funding",
        amount: this.satsValue,
        paymentMethod: "bitcoin",
      });
      await this.$store.dispatch("fetchUser");
      this.step = 3;
    });
  },

  methods: {
    handleClose() {
      this.step = 1;
      this.$emit("handleClose");
    },
    setAmount(e) {
      this.amount = amountToNumber(e);
    },

    selectOption(e) {
      this.fundingoption = e;
    },

    async handlePayment() {
      try {
        await this.$store.dispatch("ln/getSatsValue", {
          amount: this.amount,
          currency: this.AFRICANCOUNTRIES[this.user.country].currency,
        });

        if (this.fundingoption === "fund-card") {
          this.$refs.flutterwave.handleClick();
        } else {
          //generate Invoice
          await this.$store.dispatch("ln/generateInvoice", {
            amount: this.amount,
            currency: this.AFRICANCOUNTRIES[this.user.country].currency,
            socketClient: this.socketClient,
          });
          this.step++;
        }
      } catch (error) {
        handleError(error.message);
      }
    },

    async handleFlutterwavePayment() {
      //handlepayment
      await this.$store.dispatch("wallet/fundWallet", {
        type: "wallet-funding",
        amount: this.satsValue,
        paymentMethod: "card-funding",
      });
      await this.$store.dispatch("fetchUser");
      this.step = 3;
    },
  },
};
</script>