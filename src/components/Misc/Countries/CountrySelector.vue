<template>
  <div class="country-select">
    <v-menu v-model="showmenu" offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <label>Select Country</label>
        <div
          class="countries-dropdown"
          depressed
          outlined
          large
          v-bind="attrs"
          v-on="on"
          block
        >
          <div>
            <span :class="`fi fi-${country.code.toLowerCase()}`"></span>
            <span class="ml-2">{{ country.name }}</span>
          </div>
          <div>
            <v-icon>mdi-chevron-down</v-icon>
          </div>
        </div>
      </template>
      <CountriesList @selectCountry="selectCountry" />
    </v-menu>
  </div>
</template>
  
<script>
import CountriesList from "./CountriesList.vue";
export default {
  name: "CountrySelector",
  components: {
    CountriesList,
  },
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      country: {
        code: "NG",
        name: "Nigeria",
      },
      showmenu: false,
    };
  },
  methods: {
    selectCountry(country) {
      this.country = country;
      this.showmenu = false;
      this.$emit("handleInput", { [this.name]: country.name });
    },
  },
};
</script>
  
<style>
@import "../../../../styles/countries.css";
</style>
  