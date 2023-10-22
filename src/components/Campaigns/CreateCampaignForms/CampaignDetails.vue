<template>
  <div>
    <v-form>
      <FormInput
        @handleInput="handleInput"
        :type="'text'"
        :label="'Campaign Title'"
        :name="'title'"
        :placeholder="'e.g spotify ad'"
      />

      <FormInput
        @handleInput="handleInput"
        :type="'text'"
        :label="'Campaign Copy'"
        :name="'description'"
        :placeholder="'describe your campaign'"
      />
    </v-form>
  </div>
</template>


<script>
import FormInput from "@/components/Misc/Forms/FormInput.vue";
export default {
  name: "CampaignDetails",
  components: {
    FormInput
  },
  data() {
    return {
      campaignType: "",
      disabled:false,
      loading:false
    };
  },
  methods: {
    handleInput(e) {
      this.payload = { ...this.payload, ...e };
      this.$emit("handleInput",{ ...this.payload, ...e })
    },
  },
};
</script>