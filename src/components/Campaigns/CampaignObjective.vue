<template>
  <v-expansion-panel class="outlined-accordion">
    <v-expansion-panel-header disable-icon-rotate>
      <h3>
        <Icon :name="'location-tick'" class="mr-2 mt-1" />Campaign Objective
      </h3>
      <template v-slot:actions>
        <Icon :name="'accordion-icon'" />
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <CampaignObjective
        :objective="objective"
        :active="active"
        @selectObjective="selectObjective"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
  
  
  <script>
import Icon from "@/assets/icons/Icon.vue";
import CampaignObjective from "./CreateCampaignForms/CampaignObjective.vue";
export default {
  name: "CreateCampaignBody",
  components: {
    Icon,
    CampaignObjective,
  },
  props: {
    active: {
      type: String,
    },
    objective: {
      type: String,
    },
  },
  methods: {
    selectObjective(e) {
      this.$emit("selectObjective", e);
    },
  },
};
</script>