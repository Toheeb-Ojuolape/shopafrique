<template>
  <div class="form-content">
    <div class="mb-3">
    <h1>Get started on {{ BRANDNAME }}</h1>
    <div>Provide your basic information to get started.</div>
  </div>
    <v-form class="py-4">
      <v-row>
        <v-col>
          <FormInput
            :required="[rules.required]"
            @handleInput="handleInput"
            :type="'text'"
            :label="'First Name'"
            :name="'firstName'"
          />
        </v-col>
        <v-col>
          <FormInput
            :required="[rules.required]"
            @handleInput="handleInput"
            :type="'text'"
            :label="'Last Name'"
            :name="'lastName'"
          />
        </v-col>
      </v-row>
      <FormInput
        :required="[rules.email]"
        @handleInput="handleInput"
        :type="'email'"
        :label="'Email address'"
        :name="'email'"
      />
      <CountrySelector :name="'country'" @handleInput="handleInput" />
      <FormInput
        :required="[rules.password]"
        @handleInput="handleInput"
        :type="'password'"
        :label="'Password'"
        :name="'password'"
      />

      <div class="mt-3">
        <PrimaryButton
          :loading="loading"
          :disabled="disabled"
          @handleClick="nextStep"
          :large="true"
          :block="true"
        >
          Create Account
        </PrimaryButton>
      </div>

      <p class="my-3 text-center">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </v-form>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { BRANDNAME, EMAILREGEX, FORMRULES } from "@/constants/constants";
import { SIGNUPPAYLOAD } from "@/constants/payload/authPayload";
import FormInput from "../../Misc/Forms/FormInput.vue";
import CountrySelector from "@/components/Misc/Countries/CountrySelector.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default Vue.extend({
  name: "SignupForm",
  components: {
    FormInput,
    CountrySelector,
    PrimaryButton,
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
      payload: SIGNUPPAYLOAD,
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
  },
});
</script>