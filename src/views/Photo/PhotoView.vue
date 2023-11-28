<template>
  <div>
    <PhotoForm :loading="loading" />
  </div>
</template>



<script>
import { mapState } from "vuex";
import PhotoForm from "../../components/Photos/PhotoForm.vue";
export default {
  components: {
    PhotoForm,
  },

  computed: {
    ...mapState("firebase", {
      loading: (state) => state.loading,
    }),
  },
};
</script>