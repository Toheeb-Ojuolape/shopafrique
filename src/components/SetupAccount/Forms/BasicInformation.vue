<template>
  <div>
    <p class="">
      Earn by advertising on your terms – connect your website, social, and
      game<br />
      accounts, and reach your audience wherever they are
    </p>

    <v-form>
      <label>Country of residence</label>
      <FormInput :placeholder="user.country" :readonly="true" />

      <label>What's your niche</label>
      <FormInput
        :placeholder="'Enter keywords like : e.g Fashion, Tech, Bitcoin'"
        @handleInput="setNiche"
        :name="'niche'"
      />

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
    </v-form>
  </div>
</template>


<script>
import FormInput from "@/components/Misc/Forms/FormInput.vue";
import ALLCOUNTRIES from "@/data/allcountries.json";
import AGES from "@/data/ages.json";

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    FormInput,
  },
  data() {
    return {
      age: "",
      country: "",
      countries: ALLCOUNTRIES,
      ages: AGES,
      audience: {},
      payload: {},
      niche: "",
    };
  },
  methods: {
    setNiche(e) {
      let { niche } = e;
      this.audience = {
        ...this.audience,
        niche
      };
      let audience = this.audience;
      this.payload = { ...this.payload, audience};
      this.$emit("handleInput", this.payload);
    },
    setAge() {
      this.audience = {
        ...this.audience,
        ageGroup: this.age.join(","),
      };
      let audience = this.audience;
      this.payload = { ...this.payload, audience };
      this.$emit("handleInput", this.payload);
    },

    setCountry() {
      this.audience = {
        ...this.audience,
        targetDemographic: this.country.join(","),
      };
      let audience = this.audience;
      this.payload = { ...this.payload, audience };
      this.$emit("handleInput", this.payload);
    },
  },
};
</script>