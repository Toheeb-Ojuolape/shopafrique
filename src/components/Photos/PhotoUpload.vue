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
            :hint="'e.g toheeb56@bitnob.io'"
            :height="'63px'"
          />

          <FormInput
            :label="'Who is the person/people in your picture?'"
            :placeholder="'Separate by comma e.g Jack Dorsey, Elon Musk'"
            @handleInput="handleInput"
            :name="'features'"
          />

          <label>Enter Photo description</label>
          <v-textarea
            placeholder="e.g Jack Dorsey and Jay Z standing at the conference entrance"
            outlined
            v-model="description"
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
          :title="'Picture uploaded successfully'"
          :description="'You have successfully uploaded a picture to Vyouz'"
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
      description: "",
    };
  },
  watch: {
    description: function () {
      this.handleInput({ description: this.description });
    },
  },
  methods: {
    setImage(file) {
      this.file = file.target.files[0];
    },

    handleInput(e) {
      if (e.features) {
        e.features = e.features.toLowerCase().split(",");
      }
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
      if (parseFloat(this.payload.amount) < 0) {
        handleError("You can charge a negative fee lol 😅");
        return;
      }
      if (parseFloat(this.payload.amount) > 300000) {
        handleError(
          "That's too much SATs to charge for a picture, it's not an NFT you know 😅"
        );
        return;
      }
      try {
        this.payload.image = this.file;
        await this.$store.dispatch("firebase/uploadPost", this.payload);
        this.step++;
      } catch (error) {
        handleError(error.message);
      }
    },
  },
};
</script>