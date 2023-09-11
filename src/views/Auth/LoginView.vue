<template>
  <AuthContainer :className="'login-container'">
    <AuthCard>
      <LoginForm @nextStep="login" />
    </AuthCard>
  </AuthContainer>
</template>
  
  
  
<script lang="ts">
import Vue from "vue";
import AuthContainer from "@/components/Auth/AuthContainer.vue";
import AuthCard from "@/components/Auth/AuthCard.vue";
import LoginForm from "../../components/Auth/Login/LoginForm.vue";

export default Vue.extend({
  name: "LoginView",
  components: {
    AuthContainer,
    AuthCard,
    LoginForm,
  },
  data() {
    return {
    };
  },
  methods: {
    login() {
      // login api call
    },
    
  },
});
</script>