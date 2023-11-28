<template>
  <div>
    <div class="setup-container">
      <h3>Let's setup your account</h3>
      <SetupProgress :user="user" :progress="progress" :step="step" />
    </div>
    <SetupAccountForm
      :user="user"
      @setProgress="setProgress"
      @setStep="setStep"
      :loading="loading"
      :code="code"
    />
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
  props: {
    user: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
    code: {
      type: String,
    },
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