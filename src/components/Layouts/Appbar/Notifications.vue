<template>
  <v-btn fab depressed color="white" class="mr-2">
    <div top left>
      <template>
        <v-badge
          right
          :color="'red'"
          :content="2"
          overlap
        >
          <v-icon> mdi-bell-outline </v-icon>
        </v-badge>
      </template>
    </div>
  </v-btn>
</template>
  
  
  
  <script>
import moment from "moment";
export default {
  name: "NotificationsComponent",
  data() {
    return {};
  },

  filters: {
    formatDate: function (value) {
      if (!value) return "";
      return moment(value).format("LLL");
    },
  },
  props: {
    notifications: {
      type: Array,
    },
  },
  methods: {
    // goToNotifications() {
    //   this.$router.push("/notifications");
    // },
  },
};
</script>