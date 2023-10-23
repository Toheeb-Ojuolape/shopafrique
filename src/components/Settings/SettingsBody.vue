<template>
  <div>
    <page-title :title="'Settings'" />
    <div class="settings-container">
      <v-tabs active-class="active-tab" v-model="tab">
        <v-tab>Personal Information</v-tab>
        <v-tab>Account Information</v-tab>
        <v-tab>Payment details</v-tab>

        <v-tab-item class="py-5">
          <PersonalInformation :user="user" />
        </v-tab-item>

        <v-tab-item class="py-5"> <AccountInformation :user="user"/> </v-tab-item>

        <v-tab-item class="py-5"> <PaymentDetails :user="user"/> </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>


<script>
import PageTitle from "../Misc/PageTitle.vue";
import AccountInformation from "./AccountInformation.vue";
import PaymentDetails from "./PaymentDetails.vue";
import PersonalInformation from "./PersonalInformation.vue";
export default {
  name: "SettingsBody",
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    PageTitle,
    PersonalInformation,
    AccountInformation,
    PaymentDetails,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style>
@import "../../../styles/settings.css";
</style>