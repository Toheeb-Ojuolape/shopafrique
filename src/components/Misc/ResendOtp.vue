<template>
  <div class="text-center">
    <div v-if="!resendClicked">
      Didn't receive an OTP?
      <button class="brand-color" @click="resendOtp">Resend</button>
    </div>
    <div v-else>
      <p>
        Resend in
        <v-chip class="brand-color" :color="SECONDARYBLUE" small
          >00:{{ countdown }}s</v-chip
        >
      </p>
    </div>
  </div>
</template>
  
  <script>
import { SECONDARYBLUE } from "@/constants/constants";

export default {
  data() {
    return {
      resendClicked: false,
      countdown: 60,
      SECONDARYBLUE,
    };
  },
  methods: {
    resendOtp() {
      this.$emit("resendOtp");
      this.resendClicked = true;
      const timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(timer);
          this.resendClicked = false;
          this.countdown = 60;
        }
      }, 1000);
    },
  },
};
</script>

  