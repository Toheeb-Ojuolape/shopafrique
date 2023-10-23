<template>
  <DashboardLayout>
    <SettingsBody :user="user" />
  </DashboardLayout>
</template>
  
  
  
  <script>
import SettingsBody from "@/components/Settings/SettingsBody.vue";
import DashboardLayout from "@/components/Layouts/DashboardLayout.vue";
import { mapState } from "vuex";
export default {
  components: {
    DashboardLayout,
    SettingsBody,
  },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
};
</script>