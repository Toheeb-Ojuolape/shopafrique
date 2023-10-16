<template>
  <h2 class="page-title">
    {{ title }}
  </h2>
</template>


<script>
export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>