<template>
    <v-progress-linear
      :value="percentage"
      :color="BRANDCOLOR"
      height="20"
      striped
      class="rounded-lg"
    >
      <template v-slot:default="{ value }">
        <strong class="white--text text-caption">{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
</template>



<script lang="ts">
import Vue from 'vue'
import {BRANDCOLOR} from "../../constants/constants"
export default Vue.extend({
    name:"ProgressBar",
    props:{
        percentage:{
            type:Number
        }
    },
    data(){
        return{
            BRANDCOLOR:BRANDCOLOR
        }
    }
})
</script>
