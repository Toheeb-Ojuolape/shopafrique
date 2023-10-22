<template>
  <div>
    <v-card
      :class="active ? 'active-option' : ''"
      class="pa-3 campaign-media-option"
      flat
      color="#F1F4F9"
      @click="selectMedia"
    >
      <img :src="require(`../../../assets/${image}.svg`)" />
    </v-card>
    <p class="text-center">{{ title }}</p>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    selectMedia() {
      this.$emit("selectMedia", this.image);
    },
  },
};
</script>