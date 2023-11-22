<template>
  <div class="expansion-footer d-flex justify-space-between">
    <div>
      <v-checkbox label="I have pasted the code" />
    </div>
    <div class="mt-3">
      <PrimaryButton> Verify Code </PrimaryButton>
    </div>
  </div>
</template>


<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
};
</script>