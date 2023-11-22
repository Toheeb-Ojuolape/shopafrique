<template>
  <div>
    <div class="create-campaign">
      <v-expansion-panels flat v-model="basic" class="mb-6">
        <SetupForm
          :title="'Basic Details'"
          :component="BasicInformation"
          @saveInfo="nextDetails"
          @goBack="goBack"
        />
      </v-expansion-panels>

      <v-expansion-panels flat v-model="site" :value="site" class="mb-6">
        <SetupForm
          :title="'Site Details'"
          :component="SiteDetails"
          @saveInfo="nextIntegrate"
          @goBack="goBack"
        />
      </v-expansion-panels>

      <v-expansion-panels flat v-model="integrate" class="mb-6">
        <SetupForm
          :title="'Integrate site with Vyouz'"
          :component="IntegrateVyouz"
          :code="code"
          :type="'integration'"
          @goBack="goBack"
        />
      </v-expansion-panels>
    </div>
  </div>
</template>
  
  
<script>
import { CAMPAIGNPAYLOAD } from "../../constants/payload/setupPayload";
import SetupForm from "./SetupForm.vue";
import BasicInformation from "./Forms/BasicInformation.vue";
import SiteDetails from "./Forms/SiteDetails.vue";
import IntegrateVyouz from "./Forms/IntegrateVyouz.vue";

export default {
  name: "SetupAccountForm",
  components: {
    SetupForm,
  },
  data() {
    return {
      step: 0,
      basic: 1,
      site: 1,
      integrate: 1,
      setuppayload: CAMPAIGNPAYLOAD,
      loading: false,
      BasicInformation,
      SiteDetails,
      IntegrateVyouz,
      code: "<div> Code snippet from API </div>",
    };
  },
  methods: {
    nextDetails() {
      this.basic = 1;
      this.site = 0;
      this.$emit("setProgress", 60);
      this.$emit("setStep", 2);
    },
    nextIntegrate() {
      this.site = 1;
      this.integrate = 0;
      this.$emit("setProgress", 90);
      this.$emit("setStep", 3);
    },
    goBack(e) {
      if (e === "Basic Details") {
        this.basic = 1;
        this.site = 1;
        this.integrate = 1;
        this.$emit("setProgress", 30);
        this.$emit("setStep", 1);
      } else if (e === "Site Details") {
        this.basic = 0;
        this.site = 1;
        this.integrate = 1;
        this.$emit("setProgress", 60);
        this.$emit("setStep", 2);
      } else if (e === "Integrate site with Vyouz") {
        this.basic = 1;
        this.site = 0;
        this.integrate = 1;
        this.$emit("setProgress", 60);
        this.$emit("setStep", 2);
      }
    },
  },
};
</script>