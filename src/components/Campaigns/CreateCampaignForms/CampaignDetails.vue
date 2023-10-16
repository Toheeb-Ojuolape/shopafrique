<template>
  <div>
    <v-form>
      <FormInput
        @handleInput="handleInput"
        :type="'text'"
        :label="'Campaign Title'"
        :name="'campaignTitle'"
      />

      <FormInput
        @handleInput="handleInput"
        :type="'number'"
        :label="'Campaign Amount'"
        :name="'campaignTitle'"
        :placeholder="'How much would you like to commit to this campaign'"
      />

      <div>
        <label>Campaign Media Type</label>
        <v-chip-group active-class="blueColor" column>
          <v-chip label @click="setCampaignType('image')">Image</v-chip>
          <v-chip label @click="setCampaignType('video')">Video</v-chip>
          <v-chip label @click="setCampaignType('carousel')">Carousel</v-chip>
        </v-chip-group>
      </div>

      <div
        class="my-3"
        v-if="campaignType === 'image' || campaignType === 'carousel'"
      >
        <input type="file" />
      </div>

      <FormInput
        v-if="campaignType === 'video'"
        @handleInput="handleInput"
        :type="'text'"
        :label="'Video Link (Vimeo, Youtube, Google Drive)'"
        :name="'video'"
        :placeholder="'Enter the link to your Video'"
      />

      <label>How long do you want your campaign to run</label>
      <div class="d-flex pt-2">
        <div>
          <label>Start Date</label>
          <v-text-field dense outlined type="date" />
        </div>

        <div class="ml-5">
          <label>End Date</label>
          <v-text-field dense outlined type="date" />
        </div>
      </div>
    </v-form>

    <PrimaryButton
      :loading="loading"
      :disabled="disabled"
      @handleClick="nextStep"
      :large="true"
      :block="true"
    >
      Next
    </PrimaryButton>
  </div>
</template>


<script>
import FormInput from "@/components/Misc/Forms/FormInput.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
export default {
  name: "CampaignDetails",
  components: {
    FormInput,
    PrimaryButton,
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
    },
    setCampaignType(e) {
      this.campaignType = e;
    },
    nextStep() {
      this.$emit("nextStep");
    },
  },
};
</script>