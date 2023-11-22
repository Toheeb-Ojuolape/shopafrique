<template>
  <v-btn
    @click="choosePlatform"
    :disabled="disabled"
    large
    color
    class="platform-button"
    :class="active ? 'active' : ''"
  >
    <Icon :name="icon" :color="active ? 'white' : 'black'" />
    <span class="ml-2">{{ title }} </span>
  </v-btn>
</template>


<script>
import "../../../../styles/creator.css";
import Icon from "@/assets/icons/Icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    choosePlatform() {
      this.$emit("choosePlatform", this.title);
    },
  },
};
</script>
