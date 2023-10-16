<template>
  <div class="form-content">
    <BackButton v-if="showBackArrow" @goBack="goBack" />
    <h2>{{ title }}</h2>
    <div class="mb-3" v-html="description"></div>
    <v-otp-input inputmode="numeric" ref="pin" v-model="otp" :length="length">
    </v-otp-input>
    <ResendOtp @resendOtp="resendOtp" />

    <div class="my-6">
      <PrimaryButton
        :loading="loading"
        @handleClick="verifyOtp"
        :disabled="disabled"
        :large="true"
        :block="true"
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
import ResendOtp from "../ResendOtp.vue";
import handleLoading from "@/utils/handleLoading";
import authService from "@/services/Auth/authService";
export default Vue.extend({
  name: "OtpInput",
  components: {
    PrimaryButton,
    BackButton,
    ResendOtp,
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
    sessionId: {
      type: String,
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

    async resendOtp() {
      handleLoading();
      try {
        await authService.resendOtp(this.sessionId);
      } catch (error) {
        console.log(error)
      }
    },
  },
});
</script>