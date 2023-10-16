<template>
  <div class="hello__user">
    <div class="mt-3">
      <div>Vyouz Balance</div>
      <h1>$ 5000</h1>
    </div>
    <div class="mt-4">
      <PrimaryButton :large="true" @handleClick="handleFundWallet"
        ><v-icon>mdi-plus</v-icon>Add Money</PrimaryButton
      >
    </div>
  </div>
</template>
    
    
<script>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
export default {
  name: "FilterTab",
  components: {
    PrimaryButton,
  },
  methods: {
    handleFundWallet() {
      this.$emit("handleFundWallet")
    },
  },
};
</script>