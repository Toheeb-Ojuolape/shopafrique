<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field
      style="height: 56px"
      dense
      outlined
      single-line
      :type="!show ? type : 'text'"
      v-model="input"
      :rules="required"
      :append-icon="
        type === 'password' ? (show ? 'mdi-eye' : 'mdi-eye-off') : ''
      "
      @click:append="show = !show"
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
      show: false,
    };
  },
  watch: {
    input: function () {
      this.$emit("handleInput", { [this.name]: this.input.trim() });
    },
  },
});
</script>