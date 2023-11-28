<template>
  <div class="expansion-footer">
    <v-btn @click="goBack" depressed color="white" class="mr-4">Cancel</v-btn>
    <PrimaryButton
      :loading="loading"
      :disabled="cansave"
      @handleClick="saveInfo"
    >
      Save
    </PrimaryButton>
  </div>
</template>


<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  props: {
    cansave: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },
  methods: {
    saveInfo() {
      this.$emit("saveInfo");
    },
    goBack() {
      this.$emit("goBack");
    },
  },
};
</script>