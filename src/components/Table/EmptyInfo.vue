<template>
  <div class="empty-info">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <v-btn @click="emptyClick" outlined
      ><v-icon>mdi-plus</v-icon> {{ buttonText }}</v-btn
    >
  </div>
</template>


<script>
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
  },
  methods: {
    emptyClick() {
      this.$emit("emptyClick");
    },
  },
};
</script>


<style scoped>
.empty-info p{
    color:#626F86
}
@media only screen and (min-width: 600px) {
  .empty-info {
    padding: 90px 0px 0px 0px;
    text-align: start;
  }
}
</style>