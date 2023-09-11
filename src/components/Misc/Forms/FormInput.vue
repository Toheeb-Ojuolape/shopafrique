<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field
      style="height: 56px"
      dense
      outlined
      single-line
      :type="type"
      v-model="input"
      :rules="required"
    />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FormInput",
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    required: {
      type: Array,
    },
    name: {
      type: String,
    },
  },

  data() {
    return {
      input: "",
    };
  },
  watch: {
    input: function () {
      this.$emit("handleInput", { [this.name]: this.input });
    },
  },
});
</script>