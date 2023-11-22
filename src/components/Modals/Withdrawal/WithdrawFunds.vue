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
          <Icon :name="'send'" class="mr-2" />WITHDRAW FUNDS
        </v-btn>
      </div>
    </div>

    <v-window v-model="step">
      <v-window-item :value="1">
        <div class="fundingoptions">
          <HowMuch
            :isWithdraw="true"
            @setAmount="setAmount"
            :user="user && user"
            :label="label"
          />
          <WithdrawalOptions @selectOption="selectOption" />

          <div v-if="fundingoption" class="my-5">
            <FormInput
              :label="`Enter your Lightning ${
                fundingoption === 'lightning' ? 'Address' : 'Invoice'
              }`"
            />
          </div>
          <div class="mt-5">
            <PrimaryButton
              :disabled="disabled"
              :block="true"
              :large="true"
              @handleClick="handlePayment"
              :loading="loading"
            >
              Withdraw
            </PrimaryButton>
          </div>
        </div>
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
import WithdrawalOptions from "./WithdrawalOptions.vue";
import HowMuch from "../FundWallet/HowMuch.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import { amountToNumber } from "../../../utils/amountFormatter.js";
import SuccessComponent from "../../Misc/SuccessComponent.vue";
import { mapState } from "vuex";
// import handleError from "@/utils/handleErrors";
import AFRICANCOUNTRIES from "../../../data/africancountries.json";
Vue.filter("amountToNumber", amountToNumber);
import { io } from "socket.io-client";
import FormInput from "@/components/Misc/Forms/FormInput.vue";

export default {
  name: "FundWallet",
  props: {
    user: {
      type: Object,
    },
    label: {
      type: String,
    },
  },
  components: {
    Icon,
    HowMuch,
    WithdrawalOptions,
    PrimaryButton,
    SuccessComponent,
    FormInput,
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

    handlePayment() {
      this.step = 3;
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