<template>
  <div>
    <div class="setup-container">
      <h3>Let's setup your account</h3>
      <SetupProgress :progress="progress" :step="step" />
    </div>
    <SetupAccountForm @setProgress="setProgress" @setStep="setStep" />
  </div>
</template>


<script>
import SetupProgress from "../SetupAccount/SetupProgress.vue";
import SetupAccountForm from "./SetupAccountForm.vue";

export default {
  components: {
    SetupProgress,
    SetupAccountForm,
  },
  data() {
    return {
      progress: 30,
      step: 1,
    };
  },
  methods: {
    setProgress(e) {
      this.progress = e;
    },
    setStep(e) {
      this.step = e;
    },
  },
};
</script>