<template>
  <div class="countries-list">
    <v-list class="px-3 overflow-y-scroll">
      <v-text-field
        type="text"
        v-model="searchTerm"
        placeholder="Search for a country..."
      />
      <v-list-item
        @click="selectCountry(country)"
        class="pointer"
        v-for="(country, i) in filteredCountries"
        :key="i"
      >
        <span :class="`fi fi-${country.code.toLowerCase()}`"></span>
        <span class="ml-2">{{ country.name }}</span>
      </v-list-item>
    </v-list>
  </div>
</template>



<script>
import COUNTRIES from "../../../data/countries.json";
export default {
  name: "CountrySelector",
  data() {
    return {
      searchTerm: "",
      countries: COUNTRIES,
    };
  },
  computed: {
    filteredCountries() {
      const term = this.searchTerm.toLowerCase();
      return this.countries.filter((country) =>
        country.name.toLowerCase().includes(term)
      );
    },
  },
  methods: {
    selectCountry(country) {
      this.$emit("selectCountry", country);
    },
  },
};
</script>