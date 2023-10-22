<template>
  <v-expansion-panel class="outlined-accordion">
    <v-expansion-panel-header disable-icon-rotate>
      <h3>
        <Icon :name="'campaign-creative'" class="mr-2 mt-1" />Campaign Creative
      </h3>
      <template v-slot:actions>
        <Icon :name="'accordion-icon'" />
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <CampaignCreative
        @selectImage="selectImage"
        :active="active"
        @selectMedia="selectMedia"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>


<script>
import Icon from "@/assets/icons/Icon.vue";
import CampaignCreative from "./CreateCampaignForms/CampaignCreative.vue";

export default {
  name: "CreateCampaignBody",
  components: {
    Icon,
    CampaignCreative,
  },
  props: {
    active: {
      type: String,
    },
  },
  methods: {
    selectMedia(e) {
      this.$emit("selectMedia", e);
    },
    selectImage(e) {
      this.$emit("selectImage", e);
    },
  },
};
</script>