<template>
  <div>
    <v-form>
      <FormInput
        :readonly="true"
        :label="'Account Type'"
        :placeholder="user.businessType"
      />

      <FormInput
        :readonly="true"
        :label="'Publisher ID'"
        :placeholder="'pub-4278966745452923'"
      />
    </v-form>

    <div class="my-4 d-flex justify-space-between">
      <p>Account status</p>
      <v-chip class="success-chip">Active</v-chip>
    </div>
  </div>
</template>



<script>
import FormInput from "../Misc/Forms/FormInput.vue";
export default {
  components: {
    FormInput,
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>