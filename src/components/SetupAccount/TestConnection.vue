<template>
  <div class="expansion-footer d-flex justify-space-between">
    <div>
      <v-checkbox v-model="checkbox" label="I have pasted the code" />
    </div>
    <div class="mt-3">
      <PrimaryButton
        :loading="loading"
        @handleClick="saveInfo"
        :disabled="!checkbox"
      >
        Verify Code
      </PrimaryButton>
    </div>
  </div>
</template>


<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  props: {
    loading: {
      type: Boolean,
    },
  },
  components: {
    PrimaryButton,
  },
  data() {
    return {
      checkbox: false,
    };
  },
  methods: {
    saveInfo() {
      this.$emit("saveInfo");
    },
  },
};
</script>