<template>
  <div>
    <v-form class="my-2">
      <div class="font-weight-bold my-4">Duration</div>
      <v-row>
        <v-col>
          <label>Start Date</label>
          <v-text-field
            v-model="startDate"
            dense
            outlined
            type="date"
            @input="setStartDate"
          />
        </v-col>
        <v-col>
          <label>End Date</label>
          <v-text-field
            v-model="endDate"
            dense
            outlined
            type="date"
            @input="setEndDate"
          />
        </v-col>
      </v-row>

      <label>Budget (in SATs)</label>
      <div class="d-flex budget-amount">
        <v-text-field
          dense
          label="e.g 30000 sats"
          outlined
          type="number"
          inputmode="numeric"
          single-line
          :name="'budget'"
          v-model="budget"
          @input="setBudget"
        />
        <v-btn to="/wallet" color="white" class="ml-2">Fund account</v-btn>
      </div>

      <div class="font-weight-bold my-2">Audience</div>

      <label>Target countries</label>
      <v-select
        v-model="country"
        :items="countries"
        item-text="name"
        item-code="code"
        outlined
        chips
        multiple
        dense
        @change="setCountry"
      ></v-select>

      <label>Target Age groups</label>
      <v-select
        v-model="age"
        :items="ages"
        item-text="name"
        item-code="code"
        outlined
        chips
        multiple
        dense
        @change="setAge"
      ></v-select>

      <div class="mb-2">
        <label>Gender</label>
        <v-chip-group v-model="gender" active-class="blueColor" column>
          <v-chip label @click="setGender('male')"
            ><v-icon class="mr-2" small>mdi-gender-male</v-icon>Male</v-chip
          >
          <v-chip label @click="setGender('female')"
            ><v-icon class="mr-2" small>mdi-gender-female</v-icon>
            Female</v-chip
          >
          <v-chip label @click="setGender('both')"
            ><v-icon class="mr-2" small>mdi-gender-male-female</v-icon
            >Both</v-chip
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
  </div>
</template>


<script>
import FormInput from "../../Misc/Forms/FormInput.vue";
import ALLCOUNTRIES from "@/data/allcountries.json";
import AGES from "@/data/ages.json";
export default {
  components: {
    FormInput,
  },
  data() {
    return {
      countries: ALLCOUNTRIES,
      ages: AGES,
      gender: "",
      disabled: false,
      loading: false,
      age: "",
      country: [],
      audience: {},
      budget: "",
      payload: {},
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    prevStep() {
      this.$emit("prevStep");
    },

    nextStep() {
      this.$emit("nextStep");
    },

    setStartDate() {
      this.payload = { ...this.payload, startDate: this.startDate };
      this.$emit("handleInput", this.payload);
    },

    setEndDate() {
      this.payload = { ...this.payload, endDate: this.endDate };
      this.$emit("handleInput", this.payload);
    },
    setGender(e) {
      this.gender = e;
      this.audience = {
        ...this.audience,
        gender: e,
      };
      let audience = this.audience;
      this.payload = { ...this.payload, audience };
      this.$emit("handleInput", this.payload);
    },

    setAge() {
      this.audience = {
        ...this.audience,
        age: this.age.join(","),
      };

      let audience = this.audience;
      this.payload = { ...this.payload, audience };
      this.$emit("handleInput", this.payload);
    },

    setCountry() {
      this.audience = {
        ...this.audience,
        country: this.country.join(","),
      };
      let audience = this.audience;
      this.payload = { ...this.payload, audience };
      this.$emit("handleInput", this.payload);
    },

    setBudget() {
      this.payload = {
        ...this.payload,
        budget: this.budget,
      };
      this.$emit("handleInput", this.payload);
    },
    handleInput(e) {
      let audience = this.audience
      this.payload = { ...this.payload, ...e, audience };
      this.$emit("handleInput", this.payload);
    },
  },
};
</script>

