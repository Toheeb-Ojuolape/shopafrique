<template>
  <v-card class="photo-upload-form">
    <v-window v-model="step">
      <v-window-item :value="1">
        <h2>Earn BTC for your pictures</h2>
        <v-form>
          <FormInput :label="'What\'\s your name?'" />

          <FormInput :label="'What\'\s your email?'" />

          <FormInput
            :label="'What\'\s your Lightning address?'"
            :placeholder="'Where would you like to receive payment?'"
          />

          <FormInput
            :label="'Who is the person/people in your picture(s)'"
            :placeholder="'Separate by comma e.g Jack Dorsey, Jack Ma'"
          />
          <ImageUpload @setImage="setImage" />
        </v-form>

        <div class="my-3">
          <PrimaryButton
            :disabled="image ? false : true"
            :block="true"
            :large="true"
            @handleClick="uploadImage"
            >Upload</PrimaryButton
          >
        </div>
      </v-window-item>

      <v-window-item :value="2">
        <SuccessComponent
          :title="'Photos uploaded successfully'"
          :description="'You have successfully photos to Vyouz'"
        />
      </v-window-item>
    </v-window>
  </v-card>
</template>


<script>
import FormInput from "../Misc/Forms/FormInput.vue";
import ImageUpload from "../Misc/Forms/ImageUpload.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import SuccessComponent from "../Misc/SuccessComponent.vue";

export default {
  components: {
    FormInput,
    ImageUpload,
    PrimaryButton,
    SuccessComponent,
  },
  data() {
    return {
      image: "",
      step: 1,
    };
  },
  methods: {
    setImage(e) {
      console.log(e);
      this.image = e;
    },
    uploadImage() {
      this.step++;
    }
  },
};
</script>