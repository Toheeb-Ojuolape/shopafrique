<template>
  <AuthContainer>
    <AuthCard>
      <ProgressBar :percentage="percentage" />
      <v-window v-model="step">
        <v-window-item :value="1">
          <SignupForm @nextStep="nextStep" />
        </v-window-item>
        <v-window-item :value="2">
          <OtpInput
            :title="'Verify Your Email'"
            :description="`Enter the 6-digit Otp sent to 
            <span class='brand-color'>${payload.email}</span>`"
            :length="6"
            :showBackArrow="true"
            @goBack="goBack"
            @verifyOtp="verifyOtp"
          />
        </v-window-item>
        <v-window-item :value="3">
          <BusinessType
            :title="'Select Business Type'"
            :description="'What type of business do you run?'"
            @selectOption="selectOption"
            :selected="businessType"
          />
        </v-window-item>
      </v-window>
    </AuthCard>
  </AuthContainer>
</template>



<script lang="ts">
import Vue from "vue";
import AuthContainer from "@/components/Auth/AuthContainer.vue";
import AuthCard from "@/components/Auth/AuthCard.vue";
import ProgressBar from "@/components/Misc/ProgressBar.vue";
import SignupForm from "../components/Auth/Signup/SignupForm.vue";
import OtpInput from "@/components/Misc/Forms/OtpInput.vue";
import { SIGNUPPAYLOAD } from "@/constants/constants";
import BusinessType from "@/components/Auth/Signup/BusinessType.vue";

export default Vue.extend({
  name: "SignupView",
  components: {
    AuthContainer,
    AuthCard,
    ProgressBar,
    SignupForm,
    OtpInput,
    BusinessType,
  },
  data() {
    return {
      percentage: 0,
      step: 1,
      payload: SIGNUPPAYLOAD,
      businessType: "",
    };
  },
  methods: {
    goBack() {
      this.step--;
      this.percentage -= 33.3;
    },
    nextStep(payload) {
      this.payload = payload;
      this.step++;
      this.percentage += 33.3;
      //api call here
    },
    verifyOtp() {
      this.step++;
      this.percentage += 33.3;
      //api call here
    },
    selectOption(e) {
      this.businessType = e;
    },
  },
});
</script>