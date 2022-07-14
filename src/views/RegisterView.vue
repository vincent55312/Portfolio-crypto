<template>
<Navbar></Navbar>
  <div class="register">
    <h1>Register</h1>
  <FormRegister/>
  </div>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";
import Navbar from "@/components/Navbar.vue";


export default {
  name: "RegisterView",
    created(){
    document.title = "Register";
  },
    components: {
    FormRegister,
    Navbar
  },
};
</script>
