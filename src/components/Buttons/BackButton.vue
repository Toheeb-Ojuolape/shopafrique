<template>
  <v-btn :color="SECONDARYBLUE" @click="goBack" fab x-small depressed
    ><v-icon :color="BRANDCOLOR">mdi-arrow-left</v-icon></v-btn
  >
</template>



<script lang="ts">
import Vue from "vue";
import { BRANDCOLOR,SECONDARYBLUE } from "@/constants/constants";
export default Vue.extend({
  data(){
    return{
        BRANDCOLOR:BRANDCOLOR,
        SECONDARYBLUE:SECONDARYBLUE
    }
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
  },
});
</script>

