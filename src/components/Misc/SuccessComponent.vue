<template>
  <div class="success__component">
    <div>
      <iframe
        width="300"
        height="300"
        frameBorder="0"
        src="https://lottie.host/?file=fd0c40ec-f7b8-4c53-b4f8-f0d6d74b8b47/g1el75CdCM.json"
      ></iframe>

      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

      <div class="my-3">
        <PrimaryButton @handleClick="handleClose">Continue</PrimaryButton>
      </div>
    </div>
  </div>
</template>



<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>


<style scoped>
@import "../../../styles/success.css";
</style>