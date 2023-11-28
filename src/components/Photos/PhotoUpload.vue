<template>
  <v-card class="photo-upload-form">
    <v-window v-model="step">
      <v-window-item :value="1">
        <h2>Earn BTC for your pictures</h2>
        <v-form>
          <FormInput
            @handleInput="handleInput"
            :name="'name'"
            :label="'What\'\s your name?'"
          />

          <FormInput
            @handleInput="handleInput"
            :type="'email'"
            :name="'email'"
            :label="'What\'\s your email?'"
          />

          <FormInput
            :label="'How much would you like to sell this image(s)?'"
            :placeholder="'Enter the amount in SATs'"
            @handleInput="handleInput"
            :name="'amount'"
            :type="'number'"
            :inputmode="'numberic'"
          />

          <FormInput
            :label="'What\'\s your Lightning address?'"
            :placeholder="'Where would you like to receive payment?'"
            @handleInput="handleInput"
            :name="'lightningAddress'"
          />

          <FormInput
            :label="'Who is the person/people in your picture(s)'"
            :placeholder="'Separate by comma e.g Jack Dorsey, Elon Musk'"
            @handleInput="handleInput"
            :name="'features'"
          />
          <ImageUpload @setImage="setImage" />
        </v-form>

        <div class="my-3">
          <PrimaryButton
            :disabled="file && !disabled ? false : true"
            :block="true"
            :large="true"
            @handleClick="handleUpload"
            :loading="loading"
            >Upload</PrimaryButton
          >
        </div>
      </v-window-item>

      <v-window-item :value="2">
        <SuccessComponent
          :title="'Photo(s) uploaded successfully'"
          :description="'You have successfully uploaded a photo to Vyouz'"
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
import handleError from "@/utils/handleErrors";
import { EMAILREGEX } from "@/constants/constants";
import { IMAGEPAYLOAD } from "@/constants/payload/imagePayload";

export default {
  components: {
    FormInput,
    ImageUpload,
    PrimaryButton,
    SuccessComponent,
  },
  props: {
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      file: "",
      step: 1,
      imageUrl: "",
      payload: IMAGEPAYLOAD,
      disabled: false,
    };
  },
  methods: {
    setImage(file) {
      console.log(file);
      this.file = file.target.files[0];
    },

    handleInput(e) {
      this.payload = { ...this.payload, ...e };
      if (
        Object.values(this.payload).every((value) => value) &&
        EMAILREGEX.test(this.payload.email)
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    async handleUpload() {
      try {
        this.payload.image = this.file;
        await this.$store.dispatch("firebase/uploadPost", this.payload);
        this.step++
      } catch (error) {
        handleError(error.message);
      }
    },
  },
};
</script>