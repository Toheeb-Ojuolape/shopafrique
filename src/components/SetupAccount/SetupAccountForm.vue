<template>
  <div>
    <div class="create-campaign">
      <v-expansion-panels flat v-model="basic" class="mb-6">
        <SetupForm
          :title="'Basic Details'"
          :component="BasicInformation"
          @saveInfo="nextDetails"
          @goBack="goBack"
          :user="user"
          @handleInput="handleInput"
          :cansave="cansave"
          :loading="loading"
        />
      </v-expansion-panels>

      <v-expansion-panels flat v-model="site" :value="site" class="mb-6">
        <SetupForm
          :title="'Site Details'"
          :component="SiteDetails"
          @saveInfo="nextIntegrate"
          @goBack="goBack"
          @handleInput="handleSiteDetails"
          :loading="loading"
          :code="code"
        />
      </v-expansion-panels>

      <v-expansion-panels flat v-model="integrate" class="mb-6">
        <SetupForm
          :title="'Integrate site with Vyouz'"
          :component="IntegrateVyouz"
          :code="code"
          :type="'integration'"
          @goBack="goBack"
          @saveInfo="verifySite"
          :loading="loading"
        />
      </v-expansion-panels>
    </div>
  </div>
</template>
  
  
<script>
import {
  CAMPAIGNPAYLOAD,
  AUDIENCEPAYLOAD,
} from "../../constants/payload/setupPayload";
import SetupForm from "./SetupForm.vue";
import BasicInformation from "./Forms/BasicInformation.vue";
import SiteDetails from "./Forms/SiteDetails.vue";
import IntegrateVyouz from "./Forms/IntegrateVyouz.vue";
import { isEmpty } from "../../utils/validator";

export default {
  name: "SetupAccountForm",
  components: {
    SetupForm,
  },
  props: {
    user: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
    code: {
      type: String,
    },
  },
  data() {
    return {
      step: 0,
      basic: 1,
      site: 1,
      integrate: 1,
      setuppayload: CAMPAIGNPAYLOAD,
      BasicInformation,
      SiteDetails,
      IntegrateVyouz,
      audience: AUDIENCEPAYLOAD,
      cansave: true,
    };
  },
  watch: {
    audience() {
      if (isEmpty(this.audience)) {
        this.cansave = true;
      } else {
        this.cansave = false;
      }
    },
  },
  methods: {
    handleInput(e) {
      let { audience } = e;
      this.audience = { ...this.audience, ...audience };
    },

    async nextDetails() {
      try {
        await this.$store.dispatch("creator/updateDemographic", this.audience);
        this.basic = 1;
        this.site = 0;
        this.$emit("setProgress", 60);
        this.$emit("setStep", 2);
      } catch (error) {
        console.log(error);
      }
    },
    handleSiteDetails(e) {
      this.audience = { ...this.audience, ...e };
    },

    async nextIntegrate() {
      try {
        await this.$store.dispatch("creator/addSite", this.audience);
        this.site = 1;
        this.integrate = 0;
        this.$emit("setProgress", 90);
        this.$emit("setStep", 3);
      } catch (error) {
        console.log(error);
      }
    },

    async verifySite() {
      try {
        await this.$store.dispatch("creator/verifySite");
      } catch (error) {
        console.log(error);
      }
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