<template>
  <div class="form-content">
    <BackButton v-if="showBackArrow" @goBack="goBack" />
    <h2>{{ title }}</h2>
    <div class="mb-3" v-html="description"></div>
    <v-otp-input inputmode="numeric" ref="pin" v-model="otp" :length="length">
    </v-otp-input>
    <div class="text-center my-3">
      Didn't receive OTP? <button class="brand-color">Resend</button>
    </div>

    <div class="my-6">
      <PrimaryButton
        :loading="loading"
        @handleClick="verifyOtp"
        :disabled="disabled"
      >
        Continue
      </PrimaryButton>
    </div>
  </div>
</template>
  
  
  
  <script lang="ts">
import Vue from "vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import BackButton from "@/components/Buttons/BackButton.vue";
export default Vue.extend({
  name: "OtpInput",
  components: {
    PrimaryButton,
    BackButton,
  },
  props: {
    loading: {
      type: Boolean,
    },
    length: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    showBackArrow: {
      type: Boolean,
    },
  },
  data() {
    return {
      otp: "",
      disabled: true,
    };
  },
  watch: {
    otp: function () {
      if (this.otp.length == 6) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    clearOtp() {
      this.otp = "";
    },
    verifyOtp() {
      this.$emit("verifyOtp", this.otp);
    },
  },
});
</script>