<template>
  <v-expansion-panel class="outlined-accordion">
    <v-expansion-panel-header disable-icon-rotate>
      <h3><Icon :name="'campaign-details'" class="mr-2 mt-1" />{{ title }}</h3>
      <template v-slot:actions>
        <Icon :name="'accordion-icon'" />
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <component
        :code="code"
        :is="component"
        :isAddSite="false"
        :user="user"
        @handleInput="handleInput"
      />
      <ExpansionFooter
        v-if="type != 'integration'"
        @saveInfo="saveInfo"
        @goBack="goBack"
        :cansave="cansave"
        :loading="loading"
      />
      <TestConnection :loading="loading" v-if="type == 'integration'" @saveInfo="saveInfo" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
  
  
  <script>
import Icon from "@/assets/icons/Icon.vue";
import ExpansionFooter from "./ExpansionFooter.vue";
import TestConnection from "./TestConnection.vue";
export default {
  name: "CreateCampaignBody",
  components: {
    Icon,
    ExpansionFooter,
    TestConnection,
  },
  props: {
    title: {
      type: String,
    },
    component: {
      type: Object,
    },
    code: {
      type: String,
    },
    type: {
      type: String,
    },
    user: {
      type: Object,
    },
    cansave: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("handleInput", e);
    },
    saveInfo() {
      this.$emit("saveInfo");
    },
    goBack() {
      this.$emit("goBack", this.title);
    },
  },
};
</script>