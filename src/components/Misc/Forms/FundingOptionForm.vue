<template>
  <div
    :class="selected == value ? 'form-checkbox-card' : 'form-checkbox-card'"
    block
  >
    <div class="d-flex">
      <img :src="require(`../../../assets/${value}.svg`)" />
      <div class="funding__option__content">
        <div class="funding__title">{{ title }}</div>
        <div>{{ description }}</div>
      </div>
    </div>
    <input
      @change="selectOption"
      type="radio"
      id="radio"
      :name="name"
      :value="value"
    />
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
    description: {
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
  
  
  <style>
@import "../../../../styles/forms.css";
</style>