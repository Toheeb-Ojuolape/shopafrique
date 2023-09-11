<template>
  <div class="form-content">
    <BackButton @goBack="goBack"/>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div v-for="(business, i) in BUSINESSTYPES" :key="i">
      <CheckboxCard
        :selected="selected"
        @selectOption="selectOption"
        :value="business.slug"
        :title="business.title"
        :name="'business-type'"
      />
    </div>

    <div class="my-6">
      <PrimaryButton :disabled="disabled"> Continue </PrimaryButton>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { BUSINESSTYPES } from "@/constants/constants";
import BackButton from "@/components/Buttons/BackButton.vue";
import CheckboxCard from "@/components/Misc/Forms/CheckboxCard.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
export default Vue.extend({
  name: "BusinessType",
  components: {
    BackButton,
    CheckboxCard,
    PrimaryButton,
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
  },
  data() {
    return {
      BUSINESSTYPES: BUSINESSTYPES,
      disabled:true
    };
  },
  methods: {
    selectOption(e) {
      this.$emit("selectOption", e);
      this.disabled = false
    },
    goBack(){
      this.$emit("goBack")
    }
  },
});
</script>