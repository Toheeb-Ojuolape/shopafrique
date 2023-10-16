<template>
  <v-btn
    :disabled="disabled"
    :loading="loading"
    class="white--text rounded-lg primarybtn"
    @click="handleClick"
    depressed
    :block="block"
    :x-large="large"
  >
    <slot></slot>
  </v-btn>
</template>


<script lang="ts">
import Vue from "vue";
import { BRANDCOLOR } from "../../constants/constants";
export default Vue.extend({
  name: "PrimaryButton",
  props: {
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    block:{
      type:Boolean
    },
    large:{
      type:Boolean
    }
  },
  data() {
    return {
      BRANDCOLOR: BRANDCOLOR,
    };
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
});
</script>

