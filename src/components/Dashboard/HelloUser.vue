<template>
  <div class="hello__user">
    <div class="d-flex">
      <v-list-item-avatar
        color="#2D55FB"
        class="white--text d-flex justify-center"
      >
        {{ user && user.firstName.slice(0, 1) }}
      </v-list-item-avatar>
      <div class="mt-2">
        <h3>Hello {{ user.firstName }}</h3>
        <span>We hope you are having a great day.</span>
      </div>
    </div>
    <div class="d-flex buttons">
      <v-btn class="rounded-lg mr-2" outlined>Export data</v-btn>
      <PrimaryButton @handleClick="newCampaign"><v-icon>mdi-plus</v-icon>Create Campaign</PrimaryButton>
    </div>
  </div>
</template>


<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  name: "HelloUser",
  components: {
    PrimaryButton,
  },
  props: {
    user: {
      type: Object,
    },
  },
  methods:{
    newCampaign(){
        this.$router.push('/create-campaign')
    }
  }
};
</script>