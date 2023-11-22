<template>
  <v-card class="how__much rounded-xl" flat>
    <div class="how__much__input">
      <div>
        <span>{{ label }}</span>
        <input
          @input="formatInput"
          v-model="amount"
          class="input"
          inputmode="numeric"
        />
      </div>
      <div v-if="!isWithdraw">
        <v-btn small depressed rounded>
          <div>
            <span
              :class="`fi fi-${AFRICANCOUNTRIES[
                user.country
              ].code.toLowerCase()}`"
            ></span>
            <span class="ml-2">{{
              AFRICANCOUNTRIES[user.country].currency
            }}</span>
          </div>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>


<script>
import AFRICANCOUNTRIES from "../../../data/africancountries.json";
export default {
  props: {
    user: {
      type: Object,
    },
    label: {
      type: String,
    },
    isWithdraw:{
      type:Boolean
    }
  },
  data() {
    return {
      AFRICANCOUNTRIES,
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
      this.$emit("setAmount", this.amount);
    },
  },
};
</script>