<template>
  <div>
    <p class="">
      Earn by advertising on your terms – connect your website, social, and
      game<br />
      accounts, and reach your audience wherever they are
    </p>

    <v-form>
      <label>Country of residence</label>
      <FormInput />
      <label>State</label>
      <FormInput />

      <label>City</label>
      <FormInput />

      <label>Phone</label>
      <FormInput />

      <label>What's your niche</label>
      <FormInput />

      <label>Target Demographic</label>
      <v-select dense outlined></v-select>

      <label>Age group</label>
      <FormInput />
    </v-form>
  </div>
</template>


<script>
import FormInput from "@/components/Misc/Forms/FormInput.vue";
export default {
  components: {
    FormInput,
  },
};
</script>