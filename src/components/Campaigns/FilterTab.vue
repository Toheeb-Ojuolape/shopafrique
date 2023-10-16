<template>
  <div class="hello__user">
    <div class="d-flex mt-3">
        <v-text-field type="datetime-local" solo dense/>
        <v-btn color="white" class="ml-3"><Icon :name="'filter'" />Filter</v-btn>
    </div>
    <div class="d-flex buttons">
      <v-btn class="rounded-lg mr-2" outlined>Export data</v-btn>
      <PrimaryButton @handleClick="newCampaign"
        ><v-icon>mdi-plus</v-icon>Create Campaign</PrimaryButton
      >
    </div>
  </div>
</template>
  
  
  <script>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import Icon from "@/assets/icons/Icon.vue";
export default {
  name: "FilterTab",
  components: {
    PrimaryButton,
    Icon
  },
  methods: {
    newCampaign() {
      this.$router.push("/create-campaign");
    },
  },
};
</script>