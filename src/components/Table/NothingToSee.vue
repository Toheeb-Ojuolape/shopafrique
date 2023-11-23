<template>
  <div class="nothingtosee text-center">
    <img :src="require(`../../assets/${image}.svg`)" />
    <EmptyInfo
      :title="title"
      :description="description"
      :buttonText="buttonText"
      @emptyClick="emptyClick"
    />
  </div>
</template>


<script>
import EmptyInfo from "./EmptyInfo.vue";
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  components: {
    EmptyInfo,
  },
  methods: {
    emptyClick() {
      this.$emit("emptyClick");
    },
  },
};
</script>


<style scoped>
@media only screen and (min-width: 600px) {
  .nothingtosee {
    display: flex;
    justify-content: center;
  }
}
</style>