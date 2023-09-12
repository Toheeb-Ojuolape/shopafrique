<template>
  <AuthContainer :className="'login-container'">
    <AuthCard>
      <LoginForm :loading="loading" @nextStep="login" />
    </AuthCard>
  </AuthContainer>
</template>
  
  
  
<script lang="ts">
import Vue from "vue";
import AuthContainer from "@/components/Auth/AuthContainer.vue";
import AuthCard from "@/components/Auth/AuthCard.vue";
import LoginForm from "../../components/Auth/Login/LoginForm.vue";
import authService from "@/domain/Auth/authService";

export default Vue.extend({
  name: "LoginView",
  components: {
    AuthContainer,
    AuthCard,
    LoginForm,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async login(payload) {
      this.loading = true;
      try {
        let response = await authService.login(payload);
        this.$store.dispatch("setUser",response);
        this.$router.push("/dashboard");
      } catch (error) {
        this.loading = false;
      }
    },
  },
});
</script>