<template>
  <AuthContainer :className="'login-container'">
    <AuthCard>
      <v-window v-model="step">
        <v-window-item :value="1">
          <ForgotPasswordForm @nextStep="nextStep" />
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
          <ResetPasswordForm />
        </v-window-item>
      </v-window>
    </AuthCard>
  </AuthContainer>
</template>
    
    
    
    <script lang="ts">
import Vue from "vue";
import AuthContainer from "@/components/Auth/AuthContainer.vue";
import AuthCard from "@/components/Auth/AuthCard.vue";
import ForgotPasswordForm from "@/components/Auth/ForgotPassword/ForgotPasswordForm.vue";
import { PASSWORDPAYLOAD } from "@/constants/constants";
import OtpInput from "@/components/Misc/Forms/OtpInput.vue";
import ResetPasswordForm from "@/components/Auth/ForgotPassword/ResetPasswordForm.vue";

export default Vue.extend({
  name: "LoginView",
  components: {
    AuthContainer,
    AuthCard,
    ForgotPasswordForm,
    OtpInput,
    ResetPasswordForm
  },
  data() {
    return {
      step: 1,
      payload: PASSWORDPAYLOAD,
    };
  },
  methods: {
    nextStep(payload) {
      // forgotpassword api call
      this.payload = payload;
      this.step++;
    },
    goBack() {
      this.step--;
    },
    verifyOtp() {
      //api call to verify otp
      this.step++;
    },
  },
});
</script>