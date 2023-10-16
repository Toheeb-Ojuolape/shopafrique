<template>
  <div>
    <BackButton @goBack="goBack" />
    <h1>Reset Password</h1>
    <p>Let's get you stacking sats again in no time!</p>
    <v-form class="py-4">
      <FormInput
        :required="[rules.email]"
        @handleInput="handleInput"
        :type="'email'"
        :label="'Email address'"
        :name="'email'"
      />

      <div class="mt-2 mb-6">
        <PrimaryButton
          :loading="loading"
          :disabled="disabled"
          @handleClick="nextStep"
          :block="true"
        >
          Send Verification Code
        </PrimaryButton>
      </div>
    </v-form>
  </div>
</template>
    
    
    <script lang="ts">
import Vue from "vue";
import { BRANDNAME, EMAILREGEX, FORMRULES } from "../../../constants/constants";
import { EMAILPAYLOAD } from "../../../constants/payload/authPayload";
import FormInput from "../../Misc/Forms/FormInput.vue";
import PrimaryButton from "../../../components/Buttons/PrimaryButton.vue";
import BackButton from "@/components/Buttons/BackButton.vue";

export default Vue.extend({
  name: "LoginForm",
  components: {
    FormInput,
    PrimaryButton,
    BackButton,
  },
  props: {
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      BRANDNAME: BRANDNAME,
      rules: FORMRULES,
      disabled: true,
      payload: EMAILPAYLOAD,
    };
  },
  methods: {
    handleInput(e) {
      this.payload = { ...this.payload, ...e };
      if (
        Object.values(this.payload).every((value) => value) &&
        EMAILREGEX.test(this.payload.email)
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    nextStep() {
      this.$emit("nextStep", this.payload);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>