<template>
  <div>
    <v-app-bar class="app-bar" color="white" flat>
      <v-app-bar-nav-icon
        color="#0582D2"
        @click="showDrawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <Notifications />
      <div class="menuAvatar">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on" class="px-2">
              <v-list-item-avatar
                color="#2D55FB"
                class="white--text d-flex justify-center"
              >
                {{ user && user.firstName.slice(0, 1) }}
              </v-list-item-avatar>
              <v-list-item-title class="font-weight-medium">{{
                user && user.firstName
              }}</v-list-item-title>
              <v-icon>mdi-chevron-down</v-icon>
            </v-list-item>
          </template>

          <v-list>
            <v-list-item
              @click="handleMenu(item)"
              class="pointer"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon
                ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
              >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>
  
  
  
  
<script>
import Notifications from "./Notifications.vue";

export default {
  components: { Notifications },
  props: {
    user: {
      type: Object,
    },
  },
  data: () => ({
    image: "",
    userData: "",
    name: "",
    items: [
      { title: "Profile", slug: "/profile", icon: "mdi-account-outline" },
      { title: "Settings", slug: "/settings", icon: "mdi-headphones" },
      { title: "Support", slug: "/support", icon: "mdi-message" },
      { title: "Logout", slug: "logout", icon: "mdi-logout" },
    ],
  }),
  methods: {
    showDrawer() {
      this.$emit("showDrawer");
    },
    handleMenu(item) {
      if (item.slug === "logout") {
        sessionStorage.removeItem("userData");
        window.location.href = "/login";
      }
    },
  },
};
</script>
  
  
<style lang="css" scoped>
@import "./Appbar.css";
</style>
  
  