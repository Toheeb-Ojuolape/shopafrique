<template>
  <div>
    <v-form>
      <FormInput
        :readonly="true"
        :label="'Wallet ID'"
        :placeholder="'pub-4278966745452923'"
      />

      <FormInput
        :readonly="true"
        :label="'Wallet username'"
        :placeholder="'Vyouzwise343536'"
      />

      <PaymentMethods />
    </v-form>
  </div>
</template>



<script>
import FormInput from "../Misc/Forms/FormInput.vue";
import PaymentMethods from "../Misc/PaymentMethods.vue"
export default {
  components: {
    FormInput,
    PaymentMethods
  },
};
</script>