<template>
  <div class="py-5">
    <v-alert icon="mdi-information-outline" outlined type="success" text dark>
      {{ description }}
    </v-alert>
  </div>
</template>



<script>
export default {
  name: "FundAlert",
  props: {
    description: {
      type: String,
    },
  },
};
</script>