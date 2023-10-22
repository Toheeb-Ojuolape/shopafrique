<template>
  <v-expansion-panel class="outlined-accordion">
    <v-expansion-panel-header disable-icon-rotate>
      <h3>
        <Icon :name="'campaign-details'" class="mr-2 mt-1" />Campaign Details
      </h3>
      <template v-slot:actions>
        <Icon :name="'accordion-icon'" />
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <CampaignDetails @handleInput="handleInput" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>


<script>
import Icon from "@/assets/icons/Icon.vue";
import CampaignDetails from "./CreateCampaignForms/CampaignDetails.vue";
export default {
  name: "CreateCampaignBody",
  components: {
    Icon,
    CampaignDetails,
  },

  methods: {
    handleInput(e) {
      this.$emit("handleInput", e);
    },
  },
};
</script>