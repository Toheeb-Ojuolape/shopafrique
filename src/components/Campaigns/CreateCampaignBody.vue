<template>
  <div>
    <PageTitle :icon="'mdi-bullseye'" :title="'Create Campaign'" />
    <div class="create-campaign">
      <v-stepper v-model="step" flat alt-labels>
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" :step="1">
            Basic Info
          </v-stepper-step>

         <v-icon>mdi-chevron-right</v-icon>

          <v-stepper-step :complete="step > 2" :step="2">
            Demographic</v-stepper-step
          >

          <v-icon>mdi-chevron-right</v-icon>

          <v-stepper-step :step="3"> Review </v-stepper-step>
        </v-stepper-header>

        <v-stepper-content class="stepper__content" :step="1">
          <CampaignDetails @nextStep="nextStep" />
        </v-stepper-content>

        <v-stepper-content class="stepper__content" :step="2">
          <DemographicForm @prevStep="prevStep" @nextStep="nextStep" />
        </v-stepper-content>

        <v-stepper-content :step="3">
          <CompleteForm />
        </v-stepper-content>
      </v-stepper>
    </div>
  </div>
</template>


<script>
import PageTitle from "../Misc/PageTitle.vue";
import CampaignDetails from "./CreateCampaignForms/CampaignDetails.vue";
import DemographicForm from "./CreateCampaignForms/DemographicForm.vue";
import CompleteForm from "./CreateCampaignForms/CompleteForm.vue";
export default {
  name: "CreateCampaignBody",
  components: {
    PageTitle,
    CampaignDetails,
    DemographicForm,
    CompleteForm
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
  },
};
</script>