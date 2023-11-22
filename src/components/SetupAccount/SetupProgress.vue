<template>
  <div class="setuprogress">
    <div>{{ step }}/3 completed</div>
    <div class="progress-bar">
      <div class="progress" :style="`width:${(progress / 100) * 130}px`"></div>
    </div>
    <div>Skip</div>
  </div>
</template>


<script>
import { BRANDCOLOR } from "../../constants/constants";
export default {
  props: {
    step: {
      type: Number,
    },
    progress: {
      type: Number,
    },
  },
  data() {
    return {
      BRANDCOLOR,
    };
  },
};
</script>