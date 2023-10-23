<template>
  <div>
    <v-navigation-drawer
      fixed
      absolute
      :permanent="!isMobile"
      :temporary="isMobile"
      left
      class="nav__bar"
      v-model="drawer"
    >
      <v-list-item>
        <router-link to="/dashboard"><Logo /> </router-link>
      </v-list-item>

      <v-list>
        <v-list-item-group color="white">
          <v-list-item
            v-for="item in user.businessType === 'business'
              ? businessmenu
              : publishermenu"
            :key="item.title"
            :to="item.link"
            link
            :active-class="'blueBg'"
            style="color: white"
          >
            <v-list-item-icon style="margin-right: 20px">
              <v-icon v-if="!item.type" color="white">{{ item.icon }}</v-icon>
              <Icon :name="item.icon" />
            </v-list-item-icon>

            <v-list-item-content :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-group :value="value">
            <template v-slot:activator>
              <div @click="showValue" class="d-flex">
                <v-list-item-icon>
                  <icon
                    :name="'finance'"
                    :color="open ? '#0284c7' : '#363636'"
                  />
                </v-list-item-icon>
                <v-list-item-content style="margin: 0px 0px 0px -12px">
                  <v-list-item-title> Finance</v-list-item-title>
                </v-list-item-content>
              </div>
            </template> -->
          <!-- <v-list-item
              v-for="item in finances"
              :key="item.id"
              :to="item.link"
              link
              :active-class="'blackBg'"
            >
              <v-list-item-content :to="item.link">
                <v-list-item-title
                  :class="item.disabled ? 'inactive' : 'active'"
                >
                  <icon :color="'black'" :name="item.name"></icon>
                  <p class="item-position">
                    {{ item.title }}
                  </p></v-list-item-title
                >
              </v-list-item-content>
              <v-chip class="chip" x-small color="#FADEFE" v-if="item.chip"
                >soon
              </v-chip>
            </v-list-item> -->
          <!-- </v-list-group> -->

          <!-- <v-list-item class="white--text" @click="logOut()">
            <v-list-item-icon style="margin-right: 20px">
              <v-icon color="white" :loading="loading">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>

      <v-overlay v-if="loading" class="text-center">
        <v-progress-circular indeterminate></v-progress-circular>
        <p>Logging out...</p>
      </v-overlay>
    </v-navigation-drawer>
  </div>
</template>
      
<script>
import Icon from "@/assets/icons/Icon.vue";
import Logo from "@/assets/icons/Logo.vue";
export default {
  name: "NavBar",
  components: {
    Icon,
    Logo,
  },
  props: {
    isMobile: {
      type: Boolean,
    },
    user: {
      type: Object,
    },
  },
  data: () => ({
    businessmenu: [
      {
        title: "Dashboard",
        icon: "dashboard",
        link: "/dashboard",
        type: "custom-icon",
      },
      {
        title: "Campaigns",
        icon: "campaign",
        link: "/campaigns",
        type: "custom-icon",
      },
      { title: "Wallet", icon: "mdi-wallet-outline", link: "/wallet" },
      {
        title: "Settings",
        icon: "settings",
        link: "/settings",
        type: "custom-icon",
      },
    ],

    publishermenu: [
      {
        title: "Dashboard",
        icon: "dashboard",
        link: "/dashboard",
        type: "custom-icon",
      },
      {
        title: "Sites",
        icon: "sites",
        link: "/sites",
        type: "custom-icon",
      },
      { title: "Wallet", icon: "mdi-wallet-outline", link: "/wallet" },
      {
        title: "Settings",
        icon: "settings",
        link: "/settings",
        type: "custom-icon",
      },
    ],
    drawer: false,
    group: null,
    userData: "",
    name: "",
    image: "",
    loading: false,
    open: false,
    black: "#F5F5F5",
    value: false,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    showDrawer() {
      this.drawer = !this.drawer;
    },
    goToDispute() {
      this.$router.push("/support");
    },
    goToProfile() {
      this.$router.push("/settings");
    },

    showValue() {
      this.open = !this.open;
    },
  },
};
</script>
      
      
  <style scoped>
@import "./Navbar.css";
</style>