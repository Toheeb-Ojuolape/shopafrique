<template>
  <v-btn
    :disabled="disabled"
    :loading="loading"
    x-large
    class="white--text rounded-lg"
    @click="handleClick"
    block
    :color="BRANDCOLOR"
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

