<template>
  <div class="form-content">
    <BackButton @goBack="goBack" />
    <div class="mb-6">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <v-form>
      <label>Choose account type</label>
      <v-select
        v-model="businesstype"
        outlined
        dense
        :items="BUSINESSTYPES"
        item-text="title"
        item-value="slug"
        @change="selectOption"
        style="height:56px"
      >
      </v-select>

      <div v-if="businesstype==='business'">
      <FormInput
        :label="'Business name'"
        :name="'business-name'"
        :type="'text'"
      />
      <label>Business Industry</label>
      <v-select
        v-model="businessindustry"
        outlined
        dense
        :items="BUSINESSINDUSTRIES"
        item-text="title"
        item-value="slug"
        style="height:56px"
      />

      <label>Role in Business</label>
      <v-select
        v-model="businessrole"
        outlined
        dense
        :items="BUSINESSROLES"
        item-text="title"
        item-value="slug"
        style="height:56px"
      />

    </div>
    </v-form>

    <div class="my-6">
      <PrimaryButton
        @handleClick="signup"
        :loading="loading"
        :disabled="disabled"
        :block="true"
        :large="true"
      >
        Continue
      </PrimaryButton>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { BUSINESSTYPES,BUSINESSINDUSTRIES,BUSINESSROLES } from "@/constants/businessTypes";
import BackButton from "@/components/Buttons/BackButton.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import FormInput from "@/components/Misc/Forms/FormInput.vue";
export default Vue.extend({
  name: "BusinessType",
  components: {
    BackButton,
    PrimaryButton,
    FormInput,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    selected: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      BUSINESSTYPES: BUSINESSTYPES,
      BUSINESSINDUSTRIES,
      BUSINESSROLES,
      disabled: false,
      businesstype: "business",
      businessindustry:"fashion",
      businessrole:"ceo"
    };
  },
  methods: {
    selectOption() {
      this.$emit("selectOption", this.businesstype);
      this.disabled = false;
    },
    signup() {
      this.$emit("signup");
    },
    goBack() {
      this.$emit("goBack");
    },
  },
});
</script>