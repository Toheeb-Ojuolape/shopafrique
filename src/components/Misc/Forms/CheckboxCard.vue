<template>
  <div
    :class="
      selected == value
        ? 'form-checkbox-card form-checkbox-card-active'
        : 'form-checkbox-card'
    "
    block
    color="white"
  >
    <input @change="selectOption" type="radio" id="radio" :name="name" :value="value" />
    <p>{{ title }}</p>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CheckboxCard",
  props: {
    title: {
      type: String,
    },
    selected: {
      type: String,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      radio: null,
    };
  },
  methods: {
    selectOption() {
      this.$emit("selectOption", this.value);
    },
  },
});
</script>


<style scoped>
@import "../../../../styles/forms.css";
</style>