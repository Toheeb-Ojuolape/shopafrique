<template>
  <div>
    <v-btn @click="prevStep" fab x-small depressed
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <v-form class="my-2">
      <label>Target countries</label>
      <v-select
        v-model="value"
        :items="countries"
        item-text="name"
        item-code="code"
        outlined
        chips
        multiple
        dense
        style="height: 56px"
      ></v-select>

      <label>Target Age groups</label>
      <v-select
        v-model="value"
        :items="ages"
        item-text="name"
        item-code="code"
        outlined
        chips
        multiple
        dense
        style="height: 56px"
      ></v-select>

      <div class="mb-2">
        <label>Gender</label>
        <v-chip-group active-class="blueColor" column>
          <v-chip label @click="setGender('male')"
            ><v-icon class="mr-2" small>mdi-gender-male</v-icon>Male</v-chip
          >
          <v-chip label @click="setGender('female')"
            ><v-icon class="mr-2" small>mdi-gender-female</v-icon> Female</v-chip
          >
          <v-chip label @click="setGender('both')"
            ><v-icon class="mr-2" small>mdi-gender-male-female</v-icon>Both</v-chip
          >
        </v-chip-group>
      </div>

      <FormInput
        @handleInput="handleInput"
        :type="'text'"
        :label="'Keywords/Interests'"
        :name="'keywords'"
      />
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
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import FormInput from "../../Misc/Forms/FormInput.vue"
import ALLCOUNTRIES from "@/data/allcountries.json";
import AGES from "@/data/ages.json";
export default {
  components: {
    PrimaryButton,
    FormInput
  },
  data() {
    return {
      countries: ALLCOUNTRIES,
      ages: AGES,
      gender: "",
      disabled:false,
      loading:false,
      value:""
    };
  },
  methods: {
    prevStep() {
      this.$emit("prevStep");
    },

    nextStep() {
      this.$emit("nextStep");
    },
    setGender(e) {
      this.gender = e;
    },
    handleInput(e) {
      this.payload = { ...this.payload, ...e };
    },
  },
};
</script>

