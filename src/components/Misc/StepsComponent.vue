<template>
  <v-stepper :value="step" flat>
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" :step="1">
        Basic Info
      </v-stepper-step>

      <v-icon>mdi-chevron-right</v-icon>

      <v-stepper-step :complete="step > 2" :step="2">
        Strategy</v-stepper-step
      >

      <v-icon>mdi-chevron-right</v-icon>

      <v-stepper-step :step="3"> Review </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>



<script>
export default {
  props: {
    step: {
      type: Number,
    },
    steps: {
      type: Number,
    },
  },
};
</script>



<style scoped>
@import "../../../styles/forms.css";
</style>