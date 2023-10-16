<template>
  <div>
    <v-app-bar class="app-bar" color="white" flat>
      <v-app-bar-nav-icon
        color="#0582D2"
        @click="showDrawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <Notifications />
      <div class="menuAvatar" @click="goToProfile()">
        <v-list-item class="px-2">
          <v-list-item-avatar color="#2D55FB" class="white--text d-flex justify-center">
            T
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-medium">Tobi</v-list-item-title>
          <v-icon>mdi-chevron-down</v-icon>
        </v-list-item>
      </div>
    </v-app-bar>
  </div>
</template>
  
  
  
  
<script>
import Notifications from "./Notifications.vue";

export default {
  data: () => ({
    image: "",
    userData: "",
    name: "",
  }),
  components: { Notifications },
  methods: {
    goToProfile() {
      this.$router.push("/settings");
    },
    showDrawer(){
      this.$emit("showDrawer")
    }
  },
};
</script>
  
  
<style lang="css" scoped>
@import "./Appbar.css";
</style>
  
  