<template>
  <div class="code-snippet">
    <div class="d-flex justify-space-between">
      <h3>Code Snippet</h3>
      <v-btn color="white" class="rounded-lg" elevation="1">Copy Code</v-btn>
    </div>

    <div class="code">
        {{ code }}
      </div>
  </div>
</template>


<script>
export default {
  props: {
    code: {
      type: String,
    },
  },
};
</script>