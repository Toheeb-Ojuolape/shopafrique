<template>
  <div class="invoice-component">
    <div class="cursor" @click="payInvoice">
      <QrCode style="margin: auto" :text="invoice" :size="300" />

      <div class="my-6 text-center">
        <v-btn @click="copyInvoice" outlined
          ><v-icon small class="mr-2">mdi-content-copy</v-icon> Copy to
          Clipboard</v-btn
        >

        <div class="my-4">
          <v-progress-circular
            :color="BRANDCOLOR"
            size="20"
            width="2"
            indeterminate
          ></v-progress-circular>
          Listening for payment
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { BRANDCOLOR } from "@/constants/constants";
import QrCode from "vue-qrcode-component";
import handleSuccess from "@/utils/handleSuccess";
import handleError from "@/utils/handleErrors";


export default {
  components: {
    QrCode,
  },
  props: {
    invoice: {
      type: String,
    },
  },
  data() {
    return {
      BRANDCOLOR,
    };
  },
  methods: {
    copyInvoice() {
      navigator.clipboard.writeText(this.invoice);
      handleSuccess("Invoice copied to clipboard");
    },

    async payInvoice() {
      let webln = window.webln;
      if (webln) {
        try {
          await webln.enable();
          await webln.sendPayment(this.invoice);
        } catch (error) {
          handleError(error.message);
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../../../../styles/invoice.css";
</style>