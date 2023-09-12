<template>
  <AuthContainer :className="'login-container'">
    <AuthCard>
      <v-window v-model="step">
        <v-window-item :value="1">
          <ForgotPasswordForm @nextStep="nextStep" :loading="loading" />
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
            ref="otpInput"
            :loading="loading"
          />
        </v-window-item>
        <v-window-item :value="3">
          <ResetPasswordForm
            :loading="loading"
            @resetPassword="resetPassword"
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
import ForgotPasswordForm from "@/components/Auth/ForgotPassword/ForgotPasswordForm.vue";
import { PASSWORDPAYLOAD } from "@/constants/payload/authPayload";
import OtpInput from "@/components/Misc/Forms/OtpInput.vue";
import ResetPasswordForm from "@/components/Auth/ForgotPassword/ResetPasswordForm.vue";
import authService from "@/domain/Auth/authService";

export default Vue.extend({
  name: "LoginView",
  components: {
    AuthContainer,
    AuthCard,
    ForgotPasswordForm,
    OtpInput,
    ResetPasswordForm,
  },
  data() {
    return {
      step: 1,
      payload: PASSWORDPAYLOAD,
      loading: false,
      sessionId: "",
    };
  },
  methods: {
    goBack() {
      this.step--;
    },

    async nextStep(payload) {
      this.loading = true;
      this.payload = payload;
      try {
        let response = await authService.forgotPassword(payload);
        this.step++;
        this.sessionId = response.data.sessionId;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    async verifyOtp(otp) {
      this.loading = true;
      try {
        let response = await authService.verifyOtp(
          otp,
          this.sessionId,
          "FORGOTPASSWORD"
        );
        this.processId = response.data.processId;
        this.$refs.otpInput.clearOtp();
        this.payload["processId"] = response.data.processId;
        this.step++;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },

    async resetPassword(payload) {
      this.loading = true;
      try {
        await authService.resetPassword(payload.password, this.processId);
        this.$router.push("/login");
      } catch (error) {
        this.loading = false;
      }
    },
  },
});
</script>