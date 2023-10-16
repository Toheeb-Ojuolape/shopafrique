<template>
  <v-card class="how__much rounded-xl" flat>
    <div class="how__much__input">
      <div>
        <span>How much do you wish to add?</span>
        <input
          @input="formatInput"
          v-model="amount"
          class="input"
          inputmode="numeric"

        />
      </div>
      <div>
        <v-btn small depressed rounded>
          <div>
            <span :class="`fi fi-${country.code.toLowerCase()}`"></span>
            <span class="ml-2">{{ country.currency }}</span>
          </div>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      country: {
        code: "NG",
        name: "Nigeria",
        currency: "NGN",
      },
      amount: "",
    };
  },

  methods: {
    formatInput() {
      const regex = /^\d*$/;
      if (!regex.test(this.amount)) {
        this.amount = this.amount.replace(/\D/g, "");
      }
      this.amount = this.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.$emit("setAmount",this.amount)
    },
    
  },
};
</script>