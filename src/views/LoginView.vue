<template>
  <Navbar/>
  <div class="login">
    <h1>Login</h1>
  </div>
    <FormLogin/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FormLogin from "@/components/FormLogin.vue";

export default {
  name: "LoginView",
  components: {
    Navbar,
    FormLogin
  },
  created(){
    document.title = "Login"; 
  }
};
</script>
