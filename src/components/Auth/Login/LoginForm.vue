<template>
  <div class="form-content">
    <h2>Sell at the Speed of Lightning ⚡</h2>
    <v-form class="py-4">
      <FormInput
        :required="[rules.email]"
        @handleInput="handleInput"
        :type="'email'"
        :label="'Email address'"
        :name="'email'"
      />
      <FormInput
        @handleInput="handleInput"
        :type="'password'"
        :label="'Password'"
        :name="'password'"
      />

      <p class="text-end">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </p>

      <div class="mt-3">
        <PrimaryButton :disabled="disabled" @handleClick="nextStep">
          Login
        </PrimaryButton>
      </div>

      <p class="text-center my-2">
        Don't have an account? <router-link to="/signup">Signup</router-link>
      </p>
    </v-form>
  </div>
</template>
  
  
  <script lang="ts">
import Vue from "vue";
import {
  BRANDNAME,
  EMAILREGEX,
  FORMRULES
} from "@/constants/constants";
import { LOGINPAYLOAD } from "@/constants/payload/authPayload"
import FormInput from "../../Misc/Forms/FormInput.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default Vue.extend({
  name: "LoginForm",
  components: {
    FormInput,
    PrimaryButton,
  },
  data() {
    return {
      BRANDNAME: BRANDNAME,
      rules: FORMRULES,
      disabled: true,
      payload: LOGINPAYLOAD,
    };
  },
  methods: {
    handleInput(e) {
      this.payload = { ...this.payload, ...e };

      // check if every field is defined and if the email is valid
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
  },
});
</script>