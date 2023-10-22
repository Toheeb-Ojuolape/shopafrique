<template>
  <v-expansion-panel class="outlined-accordion">
    <v-expansion-panel-header disable-icon-rotate>
      <h3>
        <Icon :name="'build-campaign'" class="mr-2 mt-1" />Build your campaign
      </h3>
      <template v-slot:actions>
        <Icon :name="'accordion-icon'" />
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <DemographicForm @handleInput="handleInput" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
  
  
  <script>
import Icon from "@/assets/icons/Icon.vue";
import DemographicForm from "./CreateCampaignForms/DemographicForm.vue";

export default {
  name: "CreateCampaignBody",
  components: {
    Icon,
    DemographicForm,
  },
  props: {
    active: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("handleInput",e)
    },
  },
};
</script>