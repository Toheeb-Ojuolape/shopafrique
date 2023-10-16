<template>
  <div class="d-none" ref="flutterwave">
    <flutterwave-pay-button
      id="flutterwave"
      :tx_ref="generateReference()"
      :amount="amount"
      :currency="currency"
      payment_options="card,ussd,mobilemoney,transfer,banktransfer"
      redirect_url=""
      class="class-name"
      style=""
      :meta="{
        counsumer_id: '7898',
        consumer_mac: 'kjs9s8ss7dd',
      }"
      :customer="{
        name: name,
        email: email,
      }"
      :customizations="{
        title: 'Vyouz',
        description: 'Fund wallet',
        logo: 'https://i.ibb.co/gdPtv0k/Logo-3.png',
      }"
      :callback="makePaymentCallback"
      :onclose="closedPaymentModal"
    >
      Click To Pay
    </flutterwave-pay-button>
  </div>
</template>
  
  <script>
import { FlutterwavePayButton } from "flutterwave-vue-v3";

export default {
  name: "App",
  components: { FlutterwavePayButton },
  props: {
    amount: {
      type: [Number,String],
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    currency: {
      type: String,
    },
  },
  methods: {
    makePaymentCallback(response) {
      console.log(response)
      this.$emit("handleFlutterwavePayment")
    },
    closedPaymentModal() {
      console.log("payment modal is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
    handleClick(){
      document.getElementById("flutterwave").click()
    }
  },
};
</script>
  