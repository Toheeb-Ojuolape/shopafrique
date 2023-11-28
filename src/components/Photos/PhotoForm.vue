<template>
  <div class="photoform-container">
    <PhotoUpload :loading="loading" />
  </div>
</template>



<script>
import PhotoUpload from "./PhotoUpload.vue";
export default {
  components: {
    PhotoUpload,
  },
  props: {
    loading: {
      type: Boolean,
    },
  },
};
</script>


<style>
@import "../../../styles/photos.css";
</style>