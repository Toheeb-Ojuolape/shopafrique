<template>
  <AuthContainer>
    <AuthCard>
      <ProgressBar :percentage="percentage" />
      <v-window v-model="step">
        <v-window-item :value="1">
          <SignupForm @nextStep="nextStep" />
        </v-window-item>
        <v-window-item :value="2">
          <SignupForm />
        </v-window-item>
        <v-window-item :value="3">
          <SignupForm />
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
export default Vue.extend({
  name: "SignupView",
  components: {
    AuthContainer,
    AuthCard,
    ProgressBar,
    SignupForm,
  },
  data() {
    return {
      percentage: 0,
      step: 1,
      payload: {},
    };
  },
  methods: {
    nextStep(payload) {
      this.payload = payload;
      this.step++;
      this.percentage = 33
    },
  },
});
</script>