<template>
  <div>
    <v-form>
      <FormInput
        :label="'Full name'"
        :placeholder="user.firstName + ' ' + user.lastName"
        :readonly="true"
      />

      <FormInput :label="'Email'" :placeholder="user.email" :readonly="true" />

      <label>Language</label>
      <v-select
        disabled
        style="height: 56px"
        dense
        outlined
        readonly
        :items="languages"
        v-model="language"
      />

      <label>Time zone</label>
      <v-select
        disabled
        style="height: 56px"
        dense
        outlined
        readonly
        :items="timezone"
        v-model="timezone"
      />
    </v-form>

    <div class="my-4 d-flex justify-space-between">
      <p>Logout of account</p>
      <v-btn @click="logOut" small outlined>Log out</v-btn>
    </div>
  </div>
</template>



<script>
import FormInput from "../Misc/Forms/FormInput.vue";

export default {
  components: {
    FormInput,
  },
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      timezone: "Africa/Lagos",
      language: "English",
      languages: ["English", "French", "Arabic"],
      timezones: ["Africa/Lagos", "Europe/London"],
    };
  },

  methods: {
    logOut() {
      sessionStorage.removeItem("userData");
      window.location.href = "/login";
    },
  },
};
</script>