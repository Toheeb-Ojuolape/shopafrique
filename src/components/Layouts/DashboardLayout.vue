<template>
  <v-app>
    <v-main class="hidden-md-and-down">
      <v-row style="height: 101%">
        <v-col cols="12" md="1" sm="1" lg="1">
          <NavBar :isMobile="false" ref="nav" />
        </v-col>
        <v-col cols="12" md="11" sm="11" lg="11">
          <AppBar @showDrawer="showDrawer" />
          <div class="dashboard-layout">
            <slot></slot>
          </div>
        </v-col>
      </v-row>
    </v-main>
    <!-- mobile screen -->
    <v-main class="hidden-lg-and-up">
      <AppBar @showDrawer="showDrawer" />
      <NavBar :isMobile="true" ref="nav" />
      <div class="dashboard-layout">
        <slot></slot>
      </div>
    </v-main>
  </v-app>
</template>
  
  
  <script>
import AppBar from "./Appbar/AppBar.vue";
import NavBar from "./Navbar/NavBar.vue";
import "./DashboardLayout.css";

export default {
  components: {
    AppBar,
    NavBar,
  },
  methods: {
    showDrawer() {
      this.$refs.nav.showDrawer();
    },
  },
};
</script>