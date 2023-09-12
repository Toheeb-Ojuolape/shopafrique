<template>
    <div style="display:flex">
     <div class="spinner"></div>
     Loading...
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"SpinnerLoader"
})
</script>

<style scoped>
@import "../../../styles/loader.css";
</style>