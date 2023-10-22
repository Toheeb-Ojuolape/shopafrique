<template>
  <div>
    <div class="campaign-title">
      <PageTitle :title="'Create Campaign'" />
      <StepsComponent :step="step" :steps="3" />
    </div>
    <div class="create-campaign">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-expansion-panels flat v-model="stage" class="mb-6">
            <CampaignDetails @handleInput="handleInput" />
            <CampaignCreative
              :active="selectedmedia"
              @selectMedia="selectMedia"
              @selectImage="selectImage"
            />
          </v-expansion-panels>
        </v-window-item>

        <v-window-item :value="2">
          <v-expansion-panels flat v-model="stage" class="mb-6">
            <CampaignObjective
              @selectObjective="selectObjective"
              :objective="objective"
            />
            <CampaignBuild @handleInput="handleInput" />
          </v-expansion-panels>
        </v-window-item>

        <v-window-item :value="3">
          <v-expansion-panels flat v-model="stage" class="mb-6">
            <CompleteForm />
          </v-expansion-panels>
        </v-window-item>
      </v-window>

      <div class="d-flex justify-space-between">
        <v-btn @click="prevStep" :disabled="step === 1" outlined
          >Previous</v-btn
        >
        <PrimaryButton
          :loading="loading"
          :disabled="step === 3"
          @handleClick="nextStep"
          >Next</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>


<script>
import PageTitle from "../Misc/PageTitle.vue";
import StepsComponent from "../Misc/StepsComponent.vue";
import CampaignCreative from "./CampaignCreative.vue";
import CampaignDetails from "./CampaignDetails.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import CampaignObjective from "./CampaignObjective.vue";
import CampaignBuild from "./CampaignBuild.vue";
import CompleteForm from "./CreateCampaignForms/CompleteForm.vue";
import { CAMPAIGNPAYLOAD } from "../../constants/payload/campaignPayload";
export default {
  name: "CreateCampaignBody",
  components: {
    PageTitle,
    StepsComponent,
    CampaignDetails,
    CampaignCreative,
    PrimaryButton,
    CampaignObjective,
    CampaignBuild,
    CompleteForm,
  },
  data() {
    return {
      step: 0,
      stage: 0,
      selectedmedia: "image",
      objective: "",
      campaign: CAMPAIGNPAYLOAD,
      loading: false,
    };
  },
  methods: {
    async nextStep() {
      if (this.step == 2) {
        let access = Object.values(this.campaign);
        if (access.includes("")) {
          alert("Kindly fill in all your campaign details to proceed");
        } else {
          this.loading = true;
          await this.createCampaign();
        }
      } else {
        this.stage = 0;
        this.step++;
      }
    },
    prevStep() {
      this.step--;
    },
    selectMedia(e) {
      this.selectedmedia = e;
      this.campaign = { ...this.campaign, mediaType: e };
    },
    selectImage(e) {
      this.campaign = { ...this.campaign, media: e };
      console.log(this.campaign);
    },
    selectObjective(e) {
      this.objective = e;
      this.campaign = { ...this.campaign, objective: e };
    },
    handleInput(e) {
      this.campaign = { ...this.campaign, ...e };
      console.log(this.campaign);
    },

    async createCampaign() {
      try {
        await this.$store.dispatch("campaigns/createCampaign", this.campaign);
        this.loading = false;
        this.step++;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>