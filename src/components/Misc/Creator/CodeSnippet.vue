<template>
  <div class="code-snippet">
    <div class="d-flex justify-space-between">
      <h3>Code Snippet</h3>
      <v-btn @click="copyCode" color="white" class="rounded-lg" elevation="1"
        >Copy Code</v-btn
      >
    </div>

    <div class="code">
      {{ code }}
    </div>
  </div>
</template>


<script>
import handleSuccess from '@/utils/handleSuccess';

export default {
  props: {
    code: {
      type: String,
    },
  },
  methods: {
    copyCode() {
      navigator.clipboard.writeText(this.code);
      handleSuccess("Code copied to clipboard");
    },
  },
};
</script>