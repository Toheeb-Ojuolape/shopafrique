<template>
  <div class="form-content">
    <v-btn v-if="showBackArrow" @click="goBack" fab small depressed
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <h2>{{ title }}</h2>
    <div class="mb-3" v-html="description"></div>
    <v-otp-input v-model="otp" :length="length"> </v-otp-input>
    <div class="text-center my-3">
      Didn't receive OTP? <button class="brand-color">Resend</button>
    </div>

    <div class="my-6">
      <PrimaryButton @handleClick="verifyOtp" :disabled="disabled">
        Continue
      </PrimaryButton>
    </div>
  </div>
</template>
  
  
  
  <script lang="ts">
import Vue from "vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
export default Vue.extend({
  name: "SignupOtp",
  components: {
    PrimaryButton,
  },
  props: {
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
    verifyOtp() {
      this.$emit("verifyOtp");
    },
  },
});
</script>