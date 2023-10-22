<template>
  <div
    @click="selectObjective"
    :class="objective === icon ? 'active-objective' : ''"
    class="objective-option"
  >
    <div>
      <div>
        <Icon :name="icon" />
      </div>

      <div>
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
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
    description: {
      type: String,
    },
    objective: {
      type: String,
    },
  },
  methods: {
    selectObjective() {
      this.$emit("selectObjective", this.icon);
    },
  },
};
</script>