<template>
  <div>
    <BackButton @goBack="goBack" />
    <h1>Reset Password</h1>
    <p>Enter your new Password</p>
    <v-form>
      <FormInput
        :required="[rules.password]"
        @handleInput="handleInput"
        :type="'password'"
        :label="'Password'"
        :name="'password'"
      />

      <FormInput
        :required="[rules.password]"
        @handleInput="handleInput"
        :type="'password'"
        :label="'Confirm Password'"
        :name="'confirmpassword'"
      />

      <div class="mt-2 mb-6">
        <PrimaryButton :disabled="disabled" @handleClick="nextStep">
          Reset Password
        </PrimaryButton>
      </div>
    </v-form>
  </div>
</template>
    
    
    
<script lang="ts">
import Vue from "vue";
import { FORMRULES } from "../../../constants/constants";
import { PASSWORDPAYLOAD } from "../../../constants/payload/authPayload";
import FormInput from "../../Misc/Forms/FormInput.vue";
import PrimaryButton from "../../../components/Buttons/PrimaryButton.vue";
import BackButton from "../../../components/Buttons/BackButton.vue";

export default Vue.extend({
  name: "LoginForm",
  components: {
    FormInput,
    PrimaryButton,
    BackButton,
  },
  data() {
    return {
      rules: FORMRULES,
      disabled: true,
      payload: PASSWORDPAYLOAD,
    };
  },
  methods: {
    handleInput(e) {
      this.payload = { ...this.payload, ...e };
      if (
        Object.values(this.payload).every((value) => value) &&
        this.payload.password === this.payload.confirmpassword
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